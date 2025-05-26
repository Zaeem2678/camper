import { Box, Tabs, Tab } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const tabKeys = ['timeline', 'profile', 'myCamper', 'myOrders', 'myBookings', 'connections', 'sellMyCar','Handover Protocol'];
const tabPaths = ['/profile', '/profile/edit', '/profile/my-camper', '/profile/my-orders', '/profile/my-orders', '/profile/connection', '/profile/sell-my-car','/profile/protocol'];

const ProfileTabs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(tabPaths.indexOf(location.pathname));

  useEffect(() => {
    setValue(tabPaths.indexOf(location.pathname));
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(tabPaths[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#fff', borderRadius: 2, p: 0.5, width: '90%', }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        {tabKeys.map((key, index) => (
          <Tab
            key={index}
            label={t(`profile.tabs.${key}`)}
            sx={{
              color: 'text.secondary',
              fontSize:12,
              '&:hover': {
                color: 'primary.main',
              },
              '&.Mui-selected': {
                color: 'primary.main',
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
