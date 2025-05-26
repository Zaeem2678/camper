import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const SubscriptionSettings = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'groups',
      title: t('account.notificationSettings.subscriptions.groups', 'Groups'),
      empty: t('account.notificationSettings.subscriptions.noGroups', 'You are not currently subscribed to any groups.'),
    },
    {
      key: 'forums',
      title: t('account.notificationSettings.subscriptions.forums', 'Forums'),
      empty: t('account.notificationSettings.subscriptions.noForums', 'You are not currently subscribed to any forums.'),
    },
    {
      key: 'discussions',
      title: t('account.notificationSettings.subscriptions.discussions', 'Discussions'),
      empty: t('account.notificationSettings.subscriptions.noDiscussions', 'You are not currently subscribed to any discussions.'),
    },
  ];

  return (
    <Box>
      {sections.map((section) => (
        <Accordion key={section.key} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 500 }}>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary" fontSize="13px">{section.empty}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SubscriptionSettings;