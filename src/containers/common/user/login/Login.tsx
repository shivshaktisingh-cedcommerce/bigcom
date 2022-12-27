import LoadingScreen from 'components/LoadingScreen';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

const Login = () => {
  const [searchParams] = useSearchParams();
  let token = searchParams.get('user_token');
  if (token == null) {
    token = searchParams.get('admin_user_token');
  }
  const { isAuthenticated, loginViaToken } = useAuth();

  useEffect(() => {
    loginViaToken(token ?? '');
  }, []);

  if (!isAuthenticated) {
    return <LoadingScreen />;
  }

  return <Navigate to={'/setup'} />;
};

export default Login;
