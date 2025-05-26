import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const members = [
  { name: 'sudotahirsaeed', joined: 'May 2025', active: 'a day ago', avatar: '', badge: 'Member' },
  { name: 'gadgettrendz22', joined: 'Feb 2025', active: '2 days ago', avatar: '', badge: 'Member' },
  { name: 'sajidztech21', joined: 'Apr 2025', active: 'a week ago', avatar: '', badge: 'Member' },
  { name: 'camperdooly-boracacim', joined: 'Feb 2025', active: '3 weeks ago', avatar: '/campervan.png', badge: 'Member' },
  { name: 'Mastercamper', joined: 'Feb 2025', active: '3 weeks ago', avatar: '/mastercamper.jpg', badge: 'Member' },
  { name: 'Chris', joined: 'Feb 2025', active: '6 weeks ago', avatar: '/chris.jpg', badge: 'Member' },
  { name: 'sajidztech', joined: 'Feb 2025', active: '8 weeks ago', avatar: '', badge: 'Member' },
];

const MembersGrid = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3, mb: 2 }}>
        {members.map((m, i) => (
          <Box
            key={i}
            sx={{
              background: '#fff',
              borderRadius: 4,
              border: '1px solid #e0e0e0',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 260,
              boxShadow: '0 0 0 1px #f3f3f3',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: '0 2px 12px 0 rgba(60,72,88,0.08)' },
            }}
          >
            <Avatar
              src={m.avatar}
              sx={{
                width: 130,
                height: 130,
                mb: 2,
                bgcolor: m.avatar ? 'transparent' : '#f5f6fa',
                border: m.avatar ? 'none' : '1px solid #eee',
              }}
            />
            <Box
              sx={{
                fontSize: 12,
                color: '#2563eb',
                fontWeight: 600,
                background: '#e7edfe',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                mb: 1,
                position: 'relative',
                top: -30,
                display: 'inline-block',
              }}
            >
              {t('members.grid.badge')}
            </Box>
            <Box sx={{ fontWeight: 700, fontSize: 16, mb: 0.5, color: '#222', textAlign: 'center' }}>{m.name}</Box>
            <Box sx={{ color: '#888', fontSize: 12, textAlign: 'center' }}>
              {t('members.grid.joined')} {m.joined} • {t('members.grid.active')} {m.active}
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ color: '#888', fontSize: 14, mt: 5 }}>
        {t('members.grid.viewing', { start: 1, end: 7, total: 7 })}
      </Box>
    </>
  );
};

export default MembersGrid; 