import Router from 'routes';
import ThemeProvider from './theme';
import ThemeColorPresets from './components/ThemeColorPresets';
import ThemeLocalization from 'components/ThemeLocalization';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ConnectedAppsProvider } from 'contexts/ConnectedAppsContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectedAppsProvider>
        <ThemeProvider>
          <ThemeColorPresets>
            <ThemeLocalization>
              <Router />
            </ThemeLocalization>
          </ThemeColorPresets>
        </ThemeProvider>
      </ConnectedAppsProvider>
    </QueryClientProvider>
  );
}

export default App;
