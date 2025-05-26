import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Stack,
  Chip,
  IconButton
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; // Using outline as a placeholder for person with check
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MemberProfileCard = ({ member }) => {
  return (
    <Card sx={{ mb: 2, width: '100%', boxShadow: 'none', border: '1px solid #ccc',borderRadius: '10px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={member.avatar}
            sx={{ width: 60, height: 60, backgroundColor: '#f0f0f0' }}
          >
            <PersonIcon sx={{ fontSize: 40 }}/>
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography  fontWeight={600} sx={{fontSize:18}}>
                {member.name}
              </Typography>
              <Chip label="Member" size="small" sx={{ backgroundColor: '#e3f2fd', color: '#1e88e5',fontWeight:600,borderRadius: '5px',fontSize:12 }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
              Joined {member.joinedDate} • Active {member.activeTime}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 6 }}>
              {member.followers} followers
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small">
                <CampaignOutlinedIcon fontSize="medium" sx={{ color: 'text.secondary' }} />
              </IconButton>
               <IconButton size="small">
                <PersonOutlineIcon fontSize="medium" sx={{ color: 'text.secondary' }} />
              </IconButton>
               <IconButton size="small">
                <MailOutlineIcon fontSize="medium" sx={{ color: 'text.secondary' }} />
              </IconButton>
               <IconButton size="small">
                <MoreHorizIcon fontSize="medium" sx={{ color: 'text.secondary' }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MemberProfileCard; 