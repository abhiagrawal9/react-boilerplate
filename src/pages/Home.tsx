import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useGetJoke } from 'src/hooks/query-hooks/joke.hooks';

import logo from '../assets/images/logo512.png';
import CircularLoader from '../components/shared/Loader/CircularLoader';
import { useDocumentTitle } from '../hooks/custom-hooks';

const JokeBox = () => {
  const jokeQuery = useGetJoke();

  if (jokeQuery.isLoading) {
    return <CircularLoader />;
  }
  if (jokeQuery.error instanceof Error) {
    return (
      <Typography>An error occurred: {jokeQuery.error.message}</Typography>
    );
  }
  return <Typography fontStyle='italic'>{jokeQuery.data}</Typography>;
};

const Home: FC = () => {
  useDocumentTitle('Home');
  return (
    <Stack spacing={2}>
      <Box>
        <img width='150px' src={logo} alt='logo' />
      </Box>
      <Typography variant='h5' component='p'>
        Hello world!
      </Typography>
      <JokeBox />
    </Stack>
  );
};

export default Home;
