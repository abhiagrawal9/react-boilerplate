import { FC } from 'react';
import Paper from '@mui/material/Paper';

type CustomPaperProps = {
  children: React.ReactNode;
};

const CustomPaper: FC<CustomPaperProps> = ({ children }) => {
  return (
    <Paper sx={{ p: 2, textAlign: 'center' }} elevation={1}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
