import { Box, IconButton, Typography } from '@mui/material';
import {
  Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, YouTube
} from '@mui/icons-material';

const SocialLinksBox = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#fff', 
      borderRadius: 2, 
      p: { xs: 1.5, sm: 2 }, 
      border: "1px solid #ccc",
      textAlign: 'center',
      width: "100%",
      py: { xs: 2, sm: 3 }
    }}>
      <Box 
        display="flex" 
        justifyContent="flex-start" 
        gap={1} 
        flexWrap="wrap" 
        mb={2}
      >
        <Typography 
          variant="body1" 
          color="initial"
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          #adan 
        </Typography>
        <Typography 
          variant="body1" 
          color="initial"
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          #doooley 
        </Typography>
        <Typography 
          variant="body1" 
          color="initial"
          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
        >
          #camper 
        </Typography>
      </Box>
      <Box 
        display="flex" 
        justifyContent="flex-start" 
        gap={0.5} 
        flexWrap="wrap"
      >
        <IconButton size="small"><Facebook /></IconButton>
        <IconButton size="small"><Twitter /></IconButton>
        <IconButton size="small"><Google /></IconButton>
        <IconButton size="small"><Instagram /></IconButton>
        <IconButton size="small"><LinkedIn /></IconButton>
        <IconButton size="small"><GitHub /></IconButton>
        <IconButton size="small"><YouTube /></IconButton>
      </Box>
    </Box>
  );
};

export default SocialLinksBox;
