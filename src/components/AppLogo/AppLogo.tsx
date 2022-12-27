import Logo from 'components/Logo';
import LogoAutomatedCoupon from './child/LogoAutomatedCoupon';
import LogoPointsAndRewards from './child/LogoPointsAndRewards';

export default function AppLogo({ appName }: { appName: string }) {
  const getAppLogo = (appName: string) => {
    switch (appName) {
      case 'automatedcoupon':
        return <LogoAutomatedCoupon />;
      case 'pointsandreward':
        return <LogoPointsAndRewards />;
      default:
        return <Logo />;
    }
  };

  return getAppLogo(appName);
}
