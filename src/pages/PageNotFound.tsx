import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';

import { useDocumentTitle } from '../hooks/custom-hooks';
import { RoutePaths } from '../routes';

const PageNotFound: FC = () => {
  useDocumentTitle('Page Not Found');

  return (
    <Box
      sx={{
        p: 2,
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography gutterBottom variant='h3'>
        Page Not Found
      </Typography>
      <Link component={RouterLink} to={RoutePaths.Root} replace={true}>
        Go to Home
      </Link>
    </Box>
  );
};

export default PageNotFound;
