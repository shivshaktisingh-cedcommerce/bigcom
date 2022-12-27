import { Outlet } from 'react-router-dom';
import AuthHeader from 'components/auth/AuthHeader';
import LanguagePopover from './dashboard/header/LanguagePopover';

export default function LogoOnlyLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}
