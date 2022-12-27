import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useConnectedApps from 'hooks/useConnectedApps';
import { PATH_USER } from 'routes/paths';
import { isValidToken } from 'utils/jwt';

type GuestGuardProps = {
  children?: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated } = useAuth();
  const accessToken = localStorage.getItem('accessToken');
  const { hubspotOnboarded } = useConnectedApps();

  if (!isAuthenticated || !isValidToken(accessToken ?? '')) {
    throw new Error('Invalid Token');
  }

  if (hubspotOnboarded) {
    return <Navigate to={PATH_USER.dashboard} />;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
