import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { CREDENTIALS_KEY } from 'src/constants';
import { useAuthContext, useChosenModeContext } from 'src/contexts';

const pages = ['Home', 'About'];

const Header: FC = () => {
  const location = useLocation();
  const authCtx = useAuthContext();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [username, setUsername] = useState<string | null>(null);

  const { mode, setMode } = useChosenModeContext();

  useEffect(() => {
    const creds =
      localStorage.getItem(CREDENTIALS_KEY) ||
      sessionStorage.getItem(CREDENTIALS_KEY);

    if (creds) {
      const { username } = JSON.parse(creds);
      setUsername(username);
    }
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    location.pathname = '/';
    authCtx.logout();
  };

  return (
    <AppBar position='static' enableColorOnDark>
      <Box px={2}>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component={NavLink}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '3px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TASKY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={NavLink}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component={NavLink}
            to='/'
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '3px',
              color: 'inherit',
              textDecoration: 'none',
              ml: 6,
            }}
          >
            TASKY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                sx={{
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  '&:not(:last-child)': {
                    mr: 1,
                  },
                }}
                startIcon={page === 'Home' ? <HomeIcon /> : <InfoIcon />}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ mx: 1 }}
            onClick={() =>
              setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
            }
            color='inherit'
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{username?.charAt(0).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Stack display='row'>
                  <Typography textAlign='center'>
                    Signed in as{' '}
                    {username && (
                      <Tooltip
                        arrow
                        title={username?.length > 15 ? username : ''}
                      >
                        <Typography
                          sx={{ fontWeight: '700' }}
                          variant='body1'
                          component='span'
                        >
                          {username?.length > 15
                            ? `${username?.slice(0, 15)}...`
                            : username}
                        </Typography>
                      </Tooltip>
                    )}
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign='center'>Logout</Typography>
                <LogoutIcon sx={{ ml: 1 }} fontSize='small' />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Header;
