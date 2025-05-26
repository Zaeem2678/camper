import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Checkbox,
  Grid,
  Divider,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import SubscriptionSettings from './SubscriptionSettings';

const notificationData = [
  {
    section: 'mentions',
    items: [
      {
        descriptionKey: 'items.mentionDescription',
        keys: ['mentionEmail', 'mentionWeb'],
      },
    ],
  },
  {
    section: 'posts',
    items: [
      {
        descriptionKey: 'items.postReplyDescription',
        keys: ['postReplyEmail', 'postReplyWeb'],
      },
    ],
  },
  {
    section: 'accountSettings',
    items: [
      {
        descriptionKey: 'items.passwordChangeDescription',
        keys: ['passwordChangeEmail', 'passwordChangeWeb'],
      },
    ],
  },
  {
    section: 'activityFeeds',
    items: [
      {
        descriptionKey: 'items.activityReplyDescription',
        keys: ['activityReplyEmail', 'activityReplyWeb'],
      },
      {
        descriptionKey: 'items.newPostDescription',
        keys: ['newPostEmail', 'newPostWeb'],
      },
      {
        descriptionKey: 'items.newFollowerDescription',
        keys: ['newFollowerEmail', 'newFollowerWeb'],
      },
    ],
  },
  {
    section: 'socialGroups',
    items: [
      {
        descriptionKey: 'items.groupDetailsUpdateDescription',
        keys: ['groupDetailsUpdateEmail', 'groupDetailsUpdateWeb'],
      },
      {
        descriptionKey: 'items.groupPromotionDescription',
        keys: ['groupPromotionEmail', 'groupPromotionWeb'],
      },
      {
        descriptionKey: 'items.groupInviteDescription',
        keys: ['groupInviteEmail', 'groupInviteWeb'],
      },
      {
        descriptionKey: 'items.groupJoinRequestDescription',
        keys: ['groupJoinRequestEmail', 'groupJoinRequestWeb'],
      },
      {
        descriptionKey: 'items.groupJoinAcceptedDescription',
        keys: ['groupJoinAcceptedEmail', 'groupJoinAcceptedWeb'],
      },
      {
        descriptionKey: 'items.groupJoinRejectedDescription',
        keys: ['groupJoinRejectedEmail', 'groupJoinRejectedWeb'],
      },
      {
        descriptionKey: 'items.groupNewPostDescription',
        keys: ['groupNewPostEmail', 'groupNewPostWeb'],
      },
      {
        descriptionKey: 'items.groupNewDiscussionDescription',
        keys: ['groupNewDiscussionEmail', 'groupNewDiscussionWeb'],
      },
    ],
  },
  {
    section: 'discussionForums',
    items: [
      {
        descriptionKey: 'items.forumNewDiscussionDescription',
        keys: ['forumNewDiscussionEmail', 'forumNewDiscussionWeb'],
      },
      {
        descriptionKey: 'items.forumNewReplyDescription',
        keys: ['forumNewReplyEmail', 'forumNewReplyWeb'],
      },
    ],
  },
  {
    section: 'privateMessages',
    items: [
      {
        descriptionKey: 'items.privateMessageDescription',
        keys: ['privateMessageEmail', 'privateMessageWeb'],
      },
    ],
  },
  {
    section: 'memberConnections',
    items: [
      {
        descriptionKey: 'items.connectionRequestDescription',
        keys: ['connectionRequestEmail', 'connectionRequestWeb'],
      },
      {
        descriptionKey: 'items.connectionAcceptedDescription',
        keys: ['connectionAcceptedEmail', 'connectionAcceptedWeb'],
      },
    ],
  },
];

const NotificationSettings = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);

  const [settings, setSettings] = useState({
    globalEmail: true,
    globalWeb: true,
    mentionEmail: true,
    mentionWeb: true,
    postReplyEmail: true,
    postReplyWeb: true,
    passwordChangeEmail: true,
    passwordChangeWeb: true,
    activityReplyEmail: true,
    activityReplyWeb: true,
    newPostEmail: true,
    newPostWeb: true,
    newFollowerEmail: true,
    newFollowerWeb: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: 20 }}>
        {t('account.notificationSettings.title')}
      </Typography>

      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label={t('account.notificationSettings.tabs.preferences')} />
        <Tab label={t('account.notificationSettings.tabs.subscriptions')} />
      </Tabs>

      {tab === 0 && (
        <Box>
          <Typography sx={{ my: 4, fontSize: 14, color: "#ccc" }}>
            {t('account.notificationSettings.description')}
          </Typography>

          {/* Email & Web icons */}
          <Grid container  alignItems="center" sx={{ mb: 4 ,gap:{xs:4,sm:16}}}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <EmailOutlinedIcon sx={{ fontSize: 34, mr: 2 }} />
                <Box>
                  <Typography sx={{ fontSize: '14px' }}>{t('account.notificationSettings.email.title')}</Typography>
                  <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                    {t('account.notificationSettings.email.description')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <LanguageOutlinedIcon sx={{ fontSize: 34, mr: 2 }} />
                <Box>
                  <Typography sx={{ fontSize: '14px' }}>{t('account.notificationSettings.web.title')}</Typography>
                  <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                    {t('account.notificationSettings.web.description')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Global Enable Section */}
          <Box sx={{ p: 1, background: '#f2f2f2', borderRadius: 2, mb: 2, px: 2.3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                {t('account.notificationSettings.enableNotifications')}
              </Typography>
              <Box>
                <FormControlLabel
                  control={<Checkbox checked={settings.globalEmail} onChange={() => handleToggle('globalEmail')} />}
                  label={t('account.notificationSettings.email.title')}
                  size="small"
                  sx={{
                    transform: 'scale(0.9)',
                    padding: '2px'
                  }}
                />
                <FormControlLabel
                  control={<Checkbox checked={settings.globalWeb} onChange={() => handleToggle('globalWeb')} />}
                  label={t('account.notificationSettings.web.title')}
                  size="small"
                  sx={{
                    transform: 'scale(0.9)',
                    padding: '2px'
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Notification Sections */}
          {notificationData.map((section, i) => (
            <Box key={i} sx={{ border: '1px solid #eee', borderRadius: 2, p: 2, mb: 2 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, mb: 1 }}>
                {t(`account.notificationSettings.sections.${section.section}`)}
              </Typography>
              {section.items.map((item, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 0.1 }}
                >
                  <Typography sx={{ fontSize: '13px' }}>
                    {t(`account.notificationSettings.${item.descriptionKey}`)}
                  </Typography>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox checked={settings[item.keys[0]]} onChange={() => handleToggle(item.keys[0])} />}
                      label={t('account.notificationSettings.email.title')}
                      size="small"
                      sx={{ mr: 2, transform: 'scale(0.9)', padding: '2px' }}
                    />
                    <FormControlLabel
                      control={<Checkbox checked={settings[item.keys[1]]} onChange={() => handleToggle(item.keys[1])} />}
                      label={t('account.notificationSettings.web.title')}
                      size="small"
                      sx={{
                        transform: 'scale(0.9)',
                        padding: '2px'
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}

      {tab === 1 && <SubscriptionSettings />}
    </Box>
  );
};

export default NotificationSettings;
