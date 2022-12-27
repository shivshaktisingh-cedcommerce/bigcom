import { ConnectedAppsContext } from 'contexts/ConnectedAppsContext';
import { useContext } from 'react';

// ----------------------------------------------------------------------

const useConnectedApps = () => useContext(ConnectedAppsContext);

export default useConnectedApps;
