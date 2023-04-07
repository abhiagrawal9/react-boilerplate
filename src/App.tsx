import { FC } from 'react';

import {
  AuthContextProvider,
  ChosenModeProvider,
  ThemeProvider,
} from './contexts';
import AppRoutes from './routes';
import { ReactQueryClientProvider } from './utilities';

const App: FC = () => {
  return (
    <ChosenModeProvider>
      <ThemeProvider>
        <ReactQueryClientProvider>
          <AuthContextProvider>
            <AppRoutes />
          </AuthContextProvider>
        </ReactQueryClientProvider>
      </ThemeProvider>
    </ChosenModeProvider>
  );
};

export default App;
