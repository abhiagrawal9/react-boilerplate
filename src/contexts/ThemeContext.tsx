import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import { ModeName, useChosenModeContext } from './ChosenModeContext';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const { mode } = useChosenModeContext();
  const muiTheme = useMemo(() => createThemeHelper(mode), [mode]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

const brandColor = '#00b8d4';
const createThemeHelper = (mode: ModeName) => {
  const isDark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      background: {
        default: isDark ? '#303030;' : '#f0f0f0',
        paper: isDark ? '#242526' : '#ffffff',
      },
      primary: {
        main: brandColor,
      },
      error: {
        main: '#FF0000',
      },
      success: {
        main: '#00FF00',
      },
    },
  });
};
