import { createContext, ReactNode, useEffect, useReducer } from 'react';
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import { ActionMap, AuthState, AuthUser, JWTContextType } from '../types/auth';
import {
  LOGIN_API,
  REGISTER_API,
  USER_DETAILS_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { useNavigate } from 'react-router-dom';
import { PATH_AUTH } from 'routes/paths';

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
  VerifyEmail = 'VERIFY_EMAIL',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: null,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);

    const response = await axios.post(LOGIN_API, bodyFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (response.data.success === true) {
      const { token } = response.data.data;

      setSession(token);
      if (token) {
        const userResponse = await axios.get(USER_DETAILS_API_URL);
        const user = userResponse.data.data as AuthUser;
        dispatch({
          type: Types.Login,
          payload: {
            user,
          },
        });
      }
    }
  };

  const loginViaToken = async (token: string) => {
    if (token) {
      const userResponse = await axios.get(USER_DETAILS_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = userResponse.data.data as AuthUser;
      if (userResponse.data.success) {
        setSession(token);
        localStorage.setItem('user_id', user?.user_id ?? '');

        dispatch({
          type: Types.Login,
          payload: {
            user,
          },
        });
      }
    }
  };

  const register = async (email: string, password: string) => {
    const response = await axios.post(REGISTER_API, {
      email,
      password,
    });
    const { success, code } = response.data;

    if (success && code === 'confirmation_required') {
      navigate(PATH_AUTH.verifyEmail);
    }
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        loginViaToken,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
