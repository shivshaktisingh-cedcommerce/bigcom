export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type UserPortals = {
  _id: string;
  portal_id: number;
  hub_domain: string;
  user_id: string;
  is_connected: boolean;
  connected_apps: ConnectedApps[];
  created_at: string;
  updated_at: string;
  id: string;
};

export type ConnectedApps = {
  app_name: string;
  connection_id: number;
  is_active: boolean;
  payment_plan: {
    type: string;
    validity: string;
  };
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: 'jwt';
  login: (email: string, password: string) => Promise<void>;
  loginViaToken: (token: string) => void;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
