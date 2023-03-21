import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';
import './nav.css'

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const [dropClick, setdropClick] = useState(true)
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');
  // const isDesktop = false
  console.log(dropClick)
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{

      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : 
        // <Drawer
        //   open
        //   onClose={onCloseNav}
        //   ModalProps={{
        //     keepMounted: true,
        //   }}
        //   //keeps things dead or gray
        //   PaperProps={{
        //     sx: { width: NAV_WIDTH },
        //   }}
        // >
        //   {renderContent}
        // </Drawer>
        (dropClick ? 
          <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              height: 50,
              bgcolor: 'white',
              width: 50,
            },
          }}
        >
          <button onKeyDown = {() => setdropClick(!dropClick)} onClick = {() => setdropClick(!dropClick)} className="dropdown">
            <img  src="./assets/dropdown.png" alt="hamburger"/>
          </button>
        </Drawer>
        :
        <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            bgcolor: 'white',
            borderRightStyle: 'solid',
          },
        }}
      >
        <button onKeyDown = {() => setdropClick(!dropClick)} onClick = {() => setdropClick(!dropClick)} className="dropdown2">
          <text>Exit</text>
        </button>
        {renderContent}
      </Drawer>
        )
      }
    </Box>
  );
}
