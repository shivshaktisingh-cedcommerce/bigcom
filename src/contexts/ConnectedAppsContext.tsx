import { getAllConnectedAppsData } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import LoadingScreen from 'components/LoadingScreen';
import useAuth from 'hooks/useAuth';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { ReactNode, createContext, useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';

export type ConnectedAppsContextProps = {
  bigcommerceSourceShopId: string;
  bigcommerceDomain: string;
  hubspotTargetShopId: string;
  hubspotPortalId: number;
  hubspotOnboarded: boolean;
  refetchConnectedAddData?: () => void;
};

type BigcommerceInstalled = {
  _id: string;
  domain: string;
};

type HubspotInstalled = {
  _id: string;
  hub_id: number;
  onboarded?: boolean;
};

export type ConnectedAppsDataType = {
  success: boolean;
  message: string;
  code?: string;
  ip?: string;
  data: {
    bigcommerce: {
      installed: BigcommerceInstalled[];
    };
    hubspot: {
      installed: HubspotInstalled[];
    };
  };
};

const initialState: ConnectedAppsContextProps = {
  bigcommerceSourceShopId: '',
  bigcommerceDomain: '',
  hubspotTargetShopId: '',
  hubspotPortalId: 0,
  hubspotOnboarded: false,
};

const ConnectedAppsContext = createContext(initialState);

type ConnectedAppsProviderProps = {
  children: ReactNode;
};

function ConnectedAppsProvider({ children }: ConnectedAppsProviderProps) {
  const [marketplace, setMarketplace] = useState({
    bigcommerceSourceShopId: '',
    bigcommerceDomain: '',
    hubspotTargetShopId: '',
    hubspotPortalId: 0,
    hubspotOnboarded: false,
  });

  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  let accessToken = searchParams.get('user_token');
  if (accessToken == null) {
    accessToken = localStorage.getItem('accessToken');
  }

  const mutation = useMutation(
    () => getAllConnectedAppsData(accessToken ?? ''),
    {
      onError: () => {
        enqueueSnackbar(t('something_went_wrong'), {
          variant: 'error',
        });
      },
      onSuccess: data => {
        if (data.success) {
          const count = data.data.hubspot.installed.length;
          setMarketplace({
            bigcommerceSourceShopId:
              data.data.bigcommerce.installed?.[0]._id ?? '',
            bigcommerceDomain:
              data.data.bigcommerce.installed?.[0].domain ?? '',
            hubspotTargetShopId: count
              ? data.data.hubspot.installed[count - 1]._id
              : '',
            hubspotPortalId: Number(
              count ? data.data.hubspot.installed[count - 1].hub_id : 0
            ),
            hubspotOnboarded: count
              ? data.data.hubspot.installed[count - 1]?.onboarded ?? false
              : false,
          });
        } else {
          enqueueSnackbar(data.message, {
            variant: 'error',
          });
        }
      },
    }
  );

  useEffect(() => {
    isAuthenticated && mutation.mutate();
  }, [isAuthenticated]);

  if (mutation.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ConnectedAppsContext.Provider
      value={{
        bigcommerceSourceShopId: marketplace.bigcommerceSourceShopId,
        bigcommerceDomain: marketplace.bigcommerceDomain,
        hubspotTargetShopId: marketplace.hubspotTargetShopId,
        hubspotPortalId: marketplace.hubspotPortalId,
        hubspotOnboarded: marketplace.hubspotOnboarded,
        refetchConnectedAddData: mutation.mutate,
      }}
    >
      {children}
    </ConnectedAppsContext.Provider>
  );
}

export { ConnectedAppsProvider, ConnectedAppsContext };
