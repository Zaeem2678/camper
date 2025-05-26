import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  Stack
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const ConnectionCard = ({ user }) => {
  return (
    <Card sx={{ mb: 2, width: '100%', boxShadow: 'none', border: '1px solid #ccc',borderRadius: '10px'       }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src={user.avatar}
              sx={{ width: 48, height: 48,backgroundColor:'#f0f0f0' }}
            >
              <PersonIcon />
            </Avatar>
            <Box>
              <Typography  fontWeight={600} sx={{fontSize:18}}>
                {user.name}
              </Typography>
              <Typography  color="text.secondary" sx={{fontSize:14}}>
                Active now
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.dark' },
                minWidth: '100px',
                fontSize: 12
              }}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                 '&:hover': { backgroundColor: 'primary.dark' },
                 minWidth: '100px',
                 fontSize: 12
              }}
            >
              Ignore
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                borderColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.light' },
                minWidth: '100px',
                fontSize: 12
              }}
            >
              View
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ConnectionCard; 