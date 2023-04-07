import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomPaper from 'src/components/shared/CustomPaper/CustomPaper';
import Header from 'src/components/shared/Header/Header';

const Shell: FC = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: '100vh' }}>
      <Header />
      <Box p={2}>
        <CustomPaper>
          <Outlet />
        </CustomPaper>
      </Box>
    </Container>
  );
};

export default Shell;
