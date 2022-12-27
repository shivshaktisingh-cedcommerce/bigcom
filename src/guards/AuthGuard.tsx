import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PATH_SETUP } from 'routes/paths';
import { isValidToken } from 'utils/jwt';
import useConnectedApps from 'hooks/useConnectedApps';

type AuthGuardProps = {
  children?: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth();
  const accessToken = localStorage.getItem('accessToken');
  const { hubspotOnboarded } = useConnectedApps();

  if (!isAuthenticated || !isValidToken(accessToken ?? '')) {
    throw new Error('Invalid Token');
  }

  if (!hubspotOnboarded) {
    return <Navigate to={PATH_SETUP.root} />;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
