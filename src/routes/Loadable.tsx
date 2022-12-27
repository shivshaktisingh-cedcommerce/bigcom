import LoadingScreen from 'components/LoadingScreen';
import WebpackLoadError from 'containers/common/others/ErrorBoundary';
import useAuth from 'hooks/useAuth';
import { ElementType, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

export const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();
  const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

  return (
    <WebpackLoadError>
      <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
        <Component {...props} />
      </Suspense>
    </WebpackLoadError>
  );
};
