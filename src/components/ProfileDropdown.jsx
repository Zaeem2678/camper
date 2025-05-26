import {
    Avatar,
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography,
    Paper,
  } from '@mui/material';
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
    ChevronRight,
  } from '@mui/icons-material';
  import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
  
  const UserDropdown = ({ anchorEl, open, handleClose, user }) => {
    const { t } = useTranslation();
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [hoveredSubMenu, setHoveredSubMenu] = useState(false);
    const menuTimeoutRef = useRef(null);
    const subMenuRef = useRef(null);
    const navigate = useNavigate();
    
    // Position for the sub-menu
    const subMenuPosition = useRef({
      top: 0,
      left: 0
    });
    
    const handleMouseEnter = (label, event) => {
      clearTimeout(menuTimeoutRef.current);
      setHoveredMenu(label);
      
      // Get coordinates for submenu positioning
      if (event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        subMenuPosition.current = {
          top: rect.top,
          left: rect.left - 200 // Offset to position to the left
        };
      }
    };
    
    const handleMouseLeave = () => {
      if (!hoveredSubMenu) {
        menuTimeoutRef.current = setTimeout(() => {
          setHoveredMenu(null);
        }, 100);
      }
    };
    
    const handleSubMenuMouseEnter = () => {
      clearTimeout(menuTimeoutRef.current);
      setHoveredSubMenu(true);
    };
    
    const handleSubMenuMouseLeave = () => {
      setHoveredSubMenu(false);
      setHoveredMenu(null);
    };
  
    useEffect(() => {
      return () => {
        if (menuTimeoutRef.current) {
          clearTimeout(menuTimeoutRef.current);
        }
      };
    }, []);
  
    const handleRedirect = (path) => {
      handleClose();
      if (path === '/profile/my-camper') {
        navigate('/profile/my-camper');
      } else {
        navigate(path);
      }
    };
  
    const menuStructure = [
      {
        label: t('profile.dropdown.menu.profile.label'),
        icon: <AccountCircle />,
        subItems: [
          { label: t('profile.dropdown.menu.profile.viewProfile'), path: '/profile' },
          { label: t('profile.dropdown.menu.profile.editProfile'), path: '/profile/edit' },
          { label: t('profile.dropdown.menu.profile.profilePhoto'), path: '/profile/photo' },
          { label: t('profile.dropdown.menu.profile.coverPhoto'), path: '/profile/cover' },
        ],
      },
      {
        label: t('profile.dropdown.menu.account.label'),
        icon: <Settings />,
        subItems: [
          { label: t('profile.dropdown.menu.account.loginInfo'), path: '/account-setting' },
          { label: t('profile.dropdown.menu.account.notificationSettings'), path: '/account-setting' },
          { label: t('profile.dropdown.menu.account.privacy'), path: '/account-setting' },
          { label: t('profile.dropdown.menu.account.groupInvites'), path: '/account-setting' },
          { label: t('profile.dropdown.menu.account.exportData'), path: '/account-setting' },
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
          { label: t('profile.dropdown.menu.timeline.posts'), path: '/profile' },
        ],
      },
      {
        label: t('profile.dropdown.menu.notifications.label'),
        icon: <Notifications />,
        subItems: [
          { label: t('profile.dropdown.menu.notifications.unread'), path: '/notifications' },
          { label: t('profile.dropdown.menu.notifications.read'), path: '/notifications' },
        ],
      },
      { icon: <Mail />, label: t('profile.dropdown.menu.messages'), path: '/chat' },
      {
        icon: <People />,
        label: t('profile.dropdown.menu.connections.label'),
        path: '/profile/connection'
      },
      // {
      //   icon: <Group />,
      //   label: t('profile.dropdown.menu.groups.label'),
      //   subItems: [
      //     { label: t('profile.dropdown.menu.groups.createGroup'), path: '/creat-group' },
      //     { label: t('profile.dropdown.menu.groups.myGroups'), path: '/profile/groups' },
      //     { label: t('profile.dropdown.menu.groups.invitations'), path: '/profile/groups' },
      //   ],
      // },
      // {
      //   icon: <VideoLibrary />,
      //   label: t('profile.dropdown.menu.videos.label'),
      //   subItems: [
      //     { label: t('profile.dropdown.menu.videos.myVideos'), path: '/profile/my-video' },
      //   ],
      // },
      // {
      //   icon: <PhotoLibrary />,
      //   label: t('profile.dropdown.menu.photos.label'),
      //   subItems: [
      //     { label: t('profile.dropdown.menu.photos.myPhotos'), path: '/profile/my-photos' },
      //     { label: t('profile.dropdown.menu.photos.album'), path: '/profile/my-photos/album' },
      //   ],
      // },
      // {
      //   icon: <Forum />,
      //   label: t('profile.dropdown.menu.forums.label'),
      //   subItems: [
      //     { label: t('profile.dropdown.menu.forums.discussions'), path: '/profile/forum' },
      //     { label: t('profile.dropdown.menu.forums.replies'), path: '/profile/forum' },
      //   ],
      // },
    ];
  
    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: 280,
            borderRadius: 3,
            backgroundColor: '#fff',
            boxShadow: 3,
            p: 0.8,
          },
        }}
      >
        {/* Header with avatar, name and email */}
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1, gap: 1.5 }} onClick={()=>navigate("/profile")}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 500, color: '#111827' }}>
              {user?.name || 'User Name'}
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280' }}>
              @{user?.email || 'email@example.com'}
            </Typography>
          </Box>
        </Box>
        <Divider />
  
        {/* Menu Items */}
        <List dense>
          {menuStructure.map((item) => {
            if (item.subItems) {
              return (
                <Box 
                  key={item.label}
                  onMouseEnter={(e) => handleMouseEnter(item.label, e)}
                  onMouseLeave={handleMouseLeave}
                  sx={{ position: 'relative', }}
                >
                  <ListItemButton sx={{ '&:hover': { backgroundColor: '#f9fafb' } }}>
                    <ListItemIcon sx={{ minWidth: 30, color: '#A8A9AA' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: { fontSize: 14, fontWeight: 400, color: '#6b7280' },
                      }}
                    />
                    <ChevronRight sx={{ fontSize: 18, color: '#A8A9AA' }} />
                  </ListItemButton>
                  
                  {/* Side Submenu */}
                  {hoveredMenu === item.label && (
                    <Paper
                      ref={subMenuRef}
                      onMouseEnter={handleSubMenuMouseEnter}
                      onMouseLeave={handleSubMenuMouseLeave}
                      sx={{
                        position: 'fixed',
                        top: subMenuPosition.current.top,
                        left: subMenuPosition.current.left,
                        width: 200,
                        zIndex: 9999,
                        borderRadius: 3,
                        boxShadow: 2,
                        backgroundColor: '#fff',
                        p: 0.5,
                      }}
                    >
                      <List dense>
                        {item.subItems.map((sub) => (
                          <ListItemButton
                            key={sub.label}
                            sx={{ '&:hover': { backgroundColor: '#f9fafb' } }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClose();
                              if (sub.path === '/profile/my-camper') {
                                navigate('/profile/my-camper', { replace: true });
                              } else {
                                navigate(sub.path);
                              }
                            }}
                          >
                            <ListItemText
                              primary={sub.label}
                              primaryTypographyProps={{
                                sx: {
                                  fontSize: 13,
                                  fontWeight: 400,
                                  color: '#4b5563',
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Paper>
                  )}
                </Box>
              );
            }
  
            return (
              <ListItemButton
                key={item.label}
                onClick={() => handleRedirect(item.path)}
                sx={{ '&:hover': { backgroundColor: '#f9fafb' } }}
              >
                <ListItemIcon sx={{ minWidth: 30, color: '#A8A9AA' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: { fontSize: 14, fontWeight: 400, color: '#6b7280' },
                  }}
                />
              </ListItemButton>
            );
          })}
  
          {/* Logout */}
          <Divider />
          <ListItemButton
            onClick={() => {
              handleClose();
              // logout logic
              navigate('/signin');
            }}
            sx={{ '&:hover': { backgroundColor: '#f9fafb' } }}
          >
            <ListItemIcon sx={{ minWidth: 30, color: '#6b7280' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText
              primary={t('profile.dropdown.menu.logout')}
              primaryTypographyProps={{
                sx: { fontSize: 14, fontWeight: 400, color: '#A8A9AA' },
              }}
            />
          </ListItemButton>
        </List>
      </Popover>
    );
  };
  
  export default UserDropdown;