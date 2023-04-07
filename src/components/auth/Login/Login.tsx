import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomPaper from 'src/components/shared/CustomPaper/CustomPaper';
import { useAuthContext } from 'src/contexts';
import { useDocumentTitle } from 'src/hooks/custom-hooks';
import { ILocationState } from 'src/models';
import { RoutePaths } from 'src/routes';

import { version } from '../../../../package.json';

const Login: FC = () => {
  useDocumentTitle('Login');
  const navigate = useNavigate();
  const location = useLocation();
  const authCtx = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const resetLoginStates = () => {
    setUsername('');
    setPassword('');
    setRemember(true);
  };

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authCtx.login(username.trim(), password.trim(), remember);
    resetLoginStates();
    const redirectPath =
      (location.state as ILocationState)?.path || RoutePaths.Root;
    navigate(redirectPath, { replace: true });
  };

  if (authCtx.isAuthenticated) {
    navigate(RoutePaths.Root, { replace: true });
  }

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CustomPaper>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant='h4' component='h1'>
            Tasky
          </Typography>
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <Avatar sx={{ m: 1.5, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h2' variant='h5'>
              Sign in
            </Typography>
          </Stack>
          <Box
            component='form'
            onSubmit={loginHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  value='remember'
                  color='primary'
                />
              }
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={!username || !password}
            >
              Sign In
            </Button>
          </Box>
          <Typography variant='body2'>App Version {version}</Typography>
        </Box>
      </CustomPaper>
    </Container>
  );
};

export default Login;
