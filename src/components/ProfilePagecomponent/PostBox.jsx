import {
    Box,
    Avatar,
    TextField,
    Typography,
    IconButton,
    Tooltip,
    Button,
  } from '@mui/material';
  import {
    PhotoCamera,
    VideoLibrary,
    BarChart,
    InfoOutlined,
    FavoriteBorder,
    ChatBubbleOutline,
  } from '@mui/icons-material';

  import img from "../../assets/d.jpg"
import Post from './Post';
  
  const mockPosts = [
    {
      id: 1,
      user: {
        name: 'SudoTahirSaeed',
        avatar: '',
      },
      action: 'shared a photo',
      time: '2 hours ago',
      image: img,
    },
  ];
  
  const PostBox = () => {
    return (
      <Box sx={{ 
        width: '100%', 
        maxWidth: { xs: '100%', sm: 720 }, 
        mx: 'auto',
        px: { xs: 1, sm: 2 }
      }}>
        {/* Create Post Box */}
        <Box
          sx={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: 2,
            overflow: 'hidden',
            mb: 2,
          }}
        >
          <Box 
            display="flex" 
            alignItems="center" 
            gap={{ xs: 1, sm: 2 }} 
            p={{ xs: 1, sm: 2 }} 
            pb={1}
          >
            <Avatar />
            <TextField
              fullWidth
              placeholder="Share what's on your mind, sudotahirsaeed..."
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ 
                backgroundColor: 'transparent',
                '& .MuiInputBase-input': {
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }
              }}
            />
          </Box>
  
          <Box
            display="flex"
            gap={0.5}
            p={1}
            mt={2}
            sx={{
              backgroundColor: '#f1f5f9',
              borderTop: '1px solid #ccc',
              justifyContent: 'flex-start',
              flexWrap: { xs: 'wrap', sm: 'nowrap' }
            }}
          >
            {[{ icon: <PhotoCamera />, title: 'Attach photo' },
            { icon: <VideoLibrary />, title: 'Attach video' },
            { icon: <BarChart />, title: 'Create poll' }].map((item, i) => (
              <Tooltip
                key={i}
                title={item.title}
                placement="top"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: { backgroundColor: '#000', fontSize: 12 },
                  },
                  arrow: {
                    sx: { color: '#000' },
                  },
                }}
              >
                <IconButton>{item.icon}</IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
  
        {mockPosts.length > 0 ? (
          mockPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <Box
            sx={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ccc',
              borderRadius: 2,
              p: { xs: 1, sm: 2 },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <InfoOutlined sx={{ color: '#3b82f6' }} />
            <Typography color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
              Sorry, there was no activity found.
            </Typography>
          </Box>
        )}
      </Box>
    );
  };
  
  export default PostBox;
  