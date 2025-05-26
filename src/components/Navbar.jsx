import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Avatar,
  Divider,
  useMediaQuery,
  Menu,
  MenuItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import {
  AccountCircle,
  Settings,
  DirectionsCar,
  Timeline,
  Notifications,
  Mail,
  People,
  Group,
  VideoLibrary,
  PhotoLibrary,
  Forum,
  Logout,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

import logo from '../assets/logo.png';
import { useState } from 'react';
import UserDropdown from './ProfileDropdown';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:600px)');

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
    setExpandedMenu(null);
  };

  const handleMenuExpand = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  // Simulating login state and user data
  const isLoggedIn = true;
  const user = {
    name: 'sudotahirsaeed',
    avatarUrl: '', // Provide avatar URL if available
    email:"adanshah@gmail.com"
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMobileMenuClose();
  };

  const isActive = (path) => location.pathname === path;

  const profileMenuItems = [
    {
      label: t('profile.dropdown.menu.profile.label'),
      icon: <AccountCircle />,
      subItems: [
        { label: t('profile.dropdown.menu.profile.viewProfile'), path: '/profile' },
        { label: t('profile.dropdown.menu.profile.editProfile'), path: '/profile/edit' },
        { label: t('profile.dropdown.menu.profile.profilePhoto'), path: '/profile/edit' },
        { label: t('profile.dropdown.menu.profile.coverPhoto'), path: '/profile/edit' },
      ],
    },
    {
      label: t('profile.dropdown.menu.account.label'),
      icon: <Settings />,
      subItems: [
        { label: t('profile.dropdown.menu.account.loginInfo'), path: '/account-setting' },
        { label: t('profile.dropdown.menu.account.notificationSettings'), path: '/account/notifications' },
        { label: t('profile.dropdown.menu.account.privacy'), path: '/account/privacy' },
        { label: t('profile.dropdown.menu.account.groupInvites'), path: '/account/groups' },
        { label: t('profile.dropdown.menu.account.exportData'), path: '/account/export' },
      ],
    },
    {
      label: t('profile.dropdown.menu.yourCamper.label'),
      icon: <DirectionsCar />,
      subItems: [
        { label: t('profile.dropdown.menu.yourCamper.myCamper'), path: '/profile/my-camper' },
      ],
    },
    {
      label: t('profile.dropdown.menu.timeline.label'),
      icon: <Timeline />,
      subItems: [
        { label: t('profile.dropdown.menu.timeline.posts'), path: '/timeline/posts' },
      ],
    },
    {
      label: t('profile.dropdown.menu.notifications.label'),
      icon: <Notifications />,
      subItems: [
        { label: t('profile.dropdown.menu.notifications.unread'), path: '/notifications/unread' },
        { label: t('profile.dropdown.menu.notifications.read'), path: '/notifications/read' },
      ],
    },
    { icon: <Mail />, label: t('profile.dropdown.menu.messages'), path: '/messages' },
    { icon: <People />, label: t('profile.dropdown.menu.connections.label'), path: '/connections' },
    // { icon: <Group />, label: t('profile.dropdown.menu.groups'), path: '/groups' },
    // { icon: <VideoLibrary />, label: t('profile.dropdown.menu.videos'), path: '/videos' },
    // { icon: <PhotoLibrary />, label: t('profile.dropdown.menu.photos'), path: '/photos' },
    // { icon: <Forum />, label: t('profile.dropdown.menu.forums'), path: '/forums' },
  ];

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          bgcolor: 'black.main',
          color: 'white',
          mt: 1,
          minWidth: 280,
          maxWidth: '100%',
        },
      }}
    >
      {isLoggedIn && (
        <>
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              alt={user.name} 
              src={user.avatarUrl} 
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                {user.name}
              </Typography>
              <Typography sx={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.7)' }}>
                {user.email}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        </>
      )}

      <List sx={{ p: 0 }}>
        {/* Navigation Items */}
        <ListItemButton onClick={() => handleNavigation('/new-feed')}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary={t('navbar.newsFeed')} />
        </ListItemButton>

        <ListItemButton onClick={() => handleNavigation('/members')}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={t('navbar.members')} />
        </ListItemButton>

        <ListItemButton onClick={() => handleNavigation('/chat')}>
          <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary={t('navbar.chat')} />
        </ListItemButton>

        {/* Profile Menu Items */}
        {isLoggedIn && profileMenuItems.map((item) => (
          <Box key={item.label}>
            {item.subItems ? (
              <>
                <ListItemButton onClick={() => handleMenuExpand(item.label)}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                  {expandedMenu === item.label ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={expandedMenu === item.label} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton
                        key={subItem.label}
                        onClick={() => handleNavigation(subItem.path)}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </Box>
        ))}

        {/* Logout */}
        {isLoggedIn && (
          <>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />
            <ListItemButton onClick={() => handleNavigation('/logout')}>
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={t('profile.dropdown.menu.logout')} />
            </ListItemButton>
          </>
        )}

        {/* Sign In/Sign Up */}
        {!isLoggedIn && (
          <>
            <ListItemButton onClick={() => handleNavigation('/signin')}>
              <ListItemText primary={t('navbar.signIn')} />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigation('/signup')}>
              <ListItemText primary={t('navbar.signUp')} />
            </ListItemButton>
          </>
        )}
      </List>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'black.main',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        px: isMobile ? '2%' : '5%'
      }}
    >
      <Container maxWidth="xl" sx={{ px: isMobile ? '2%' : '3%' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
          
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt={t('common.logo')}
            sx={{ 
              height: isMobile ? 40 : 55, 
              cursor: 'pointer', 
              mr: isMobile ? 1 : 2 
            }}
            onClick={() => navigate('/')}
          />

          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {!isLoggedIn && (
                <Button
                  startIcon={<HomeIcon />}
                  onClick={() => handleNavigation('/')}
                  sx={{
                    color: isActive('/') ? 'primary.main' : 'white',
                    textTransform: 'none',
                    position: 'relative',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    '&::after': isActive('/') ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      bgcolor: 'primary.main',
                    } : {},
                  }}
                >
                  {t('navbar.index')}
                </Button>
              )}

              <Button
                startIcon={<FeedIcon />}
                onClick={() => handleNavigation('/new-feed')}
                sx={{
                  color: isActive('/new-feed') ? 'primary.main' : 'white',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                  '&::after': isActive('/new-feed') ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    bgcolor: 'primary.main',
                  } : {},
                }}
              >
                {t('navbar.newsFeed')}
              </Button>

              <Button
                startIcon={<PeopleIcon />}
                onClick={() => handleNavigation('/members')}
                sx={{
                  color: isActive('/members') ? 'primary.main' : 'white',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                  '&::after': isActive('/members') ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    bgcolor: 'primary.main',
                  } : {},
                }}
              >
                {t('navbar.members')}
              </Button>
            </Box>
          )}

          {/* Right Side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 2 }}>
            {/* Utility Icons - Always visible */}
            <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
              <SearchIcon />
            </IconButton>

            {isLoggedIn && (
              <>
                <IconButton 
                  sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                  onClick={() => handleNavigation('/chat')}
                >
                  <MailOutlineIcon />
                </IconButton>
                <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}                   onClick={() => handleNavigation('/notifications')}
                >
                  <NotificationsIcon />
                </IconButton>
              </>
            )}

            {/* Menu Icon - Only visible on mobile */}
            {isMobile && (
              <IconButton 
                sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop-only elements */}
            {!isMobile && (
              <>
                {isLoggedIn && (
                  <>
                    <Typography sx={{ color: 'white', fontWeight: 600, fontSize: 14 }}>
                      {user.name}
                    </Typography>
                    <Avatar 
                      alt={user.name} 
                      src={user.avatarUrl} 
                      sx={{ width: 32, height: 32, cursor: 'pointer' }}
                      onClick={handleProfileClick}
                    />
                    <UserDropdown
                      anchorEl={profileAnchorEl}
                      open={Boolean(profileAnchorEl)}
                      handleClose={handleProfileClose}
                      user={user}
                    />
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <Button
                      onClick={() => navigate('/signin')}
                      sx={{
                        color: 'white',
                        textTransform: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'transparent',
                        },
                      }}
                    >
                      {t('navbar.signIn')}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate('/signup')}
                      sx={{
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      }}
                    >
                      {t('navbar.signUp')}
                    </Button>
                  </>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
      {renderMobileMenu}
    </AppBar>
  );
};

export default Navbar;
