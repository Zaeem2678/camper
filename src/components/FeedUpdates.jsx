import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

const updates = [
  { user: 'gadgettrendz22', action: 'updated their profile', time: 'a week ago', avatar: '' },
  { user: 'camperdooly-boracacim', action: 'posted an update', time: '7 weeks ago', content: 'heute war ein schöner tg', avatar: '' },
  { user: 'Chris', action: 'changed their profile photo', time: '2 months ago', avatar: '' },
  { user: 'Chris', action: 'became a registered member', time: '2 months ago', avatar: '' },
  { user: 'Mastercamper', action: 'changed their profile photo', time: '2 months ago', avatar: '' },
  { user: 'Mastercamper', action: 'became a registered member', time: '2 months ago', avatar: '' },
  { user: 'camperdooly-boracacim', action: 'changed their profile photo', time: '2 months ago', avatar: '' },
  { user: 'camperdooly-boracacim', action: 'posted an update', time: '2 months ago', content: 'dwdwd', avatar: '' },
];

const FeedUpdates = () => (
  <Box>
    <Box sx={{ fontWeight: 600, fontSize: 24, mb: 2 }}>News Feed</Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            borderBottom: '3px solid',
            borderColor: 'primary.main',
            pb: 0.5,
            transition: 'color 0.2s',
            '&:hover': {
              color: 'primary.main',
              background: 'transparent',
            },
          }}
        >
          All Updates
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', background: '#ffff', borderRadius: 1, px: 2, py: 2,border: '1px solid #e0e0e0', height: 35 }}>
          <SearchIcon sx={{ color: '#bbb', fontSize: 18, mr: 0.5 }} />
          <input
            type="text"
            placeholder="Search Feeds"
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 13,
              color: '#888',
              width: 180,
              padding: 0,
              marginLeft: 2,
              '::placeholder': { color: '#bbb' },
            }}
          />
        </Box>
      </Box>
    </Box>
    {updates.map((u, i) => (
      <Box key={i} sx={{ background: '#fff', borderRadius: 2, border: '1px solid #e0e0e0', mb: 2.5, p: 2, display: 'flex', alignItems: 'flex-start', gap: 2 ,minHeight: 130}}>
        <Avatar sx={{ width: 44, height: 44, bgcolor: 'grey.200', flexShrink: 0 }} src={u.avatar} />
        <Box>
          <Box sx={{ fontWeight: 500, mb: 0.5, display: 'flex', alignItems: 'center',fontSize:14 }}>
            <Box component="span" sx={{ color: '#007bff', mr: 0.5 ,}}>{u.user}</Box> {u.action}
          </Box>
          <Box sx={{ color: '#888', fontSize: 13, mb: u.content ? 1 : 0 }}>{u.time}</Box>
          {u.content && <Box sx={{ fontSize: 15 }}>{u.content}</Box>}
        </Box>
      </Box>
    ))}
  </Box>
);

export default FeedUpdates; 