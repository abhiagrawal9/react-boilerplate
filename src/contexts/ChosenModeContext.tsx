import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useLocalStorage } from '../hooks/custom-hooks';

export type ModeName = 'dark' | 'light';
type IChosenMode = {
  mode: ModeName;
  setMode: Dispatch<SetStateAction<ModeName>>;
};

const ChosenMode = createContext<IChosenMode>({} as IChosenMode);
export const useChosenModeContext = () => useContext(ChosenMode);

type ChosenModeContextProviderProps = {
  children: React.ReactNode;
};
export const ChosenModeProvider = ({
  children,
}: ChosenModeContextProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useLocalStorage<ModeName>(
    'mode',
    prefersDarkMode ? 'dark' : 'light',
  );

  return (
    <ChosenMode.Provider value={{ mode, setMode }}>
      {children}
    </ChosenMode.Provider>
  );
};
