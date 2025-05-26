import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  IconButton,
  Divider,
  Badge,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon
} from '@mui/material';
import {
  Send as SendIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  CameraAlt as CameraIcon,
  Videocam as VideocamIcon,
  TextFormat as TextFormatIcon,
  MoreHoriz as MoreHorizIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
  MailOutline as MailOutlineIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    name: 'sajidztech',
    lastMessage: 'dasdas',
    time: 'Now',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }); // Default to the first chat being selected
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor element
  const [openMenuId, setOpenMenuId] = useState(null); // State for the ID of the chat item whose menu is open

  const handleMenuClick = (event, chatId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(chatId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  const handleMarkAsUnread = () => {
    console.log('Mark as unread clicked for chat', openMenuId);
    handleMenuClose();
  };

  const handleArchive = () => {
    console.log('Archive clicked for chat', openMenuId);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log('Delete clicked for chat', openMenuId);
    handleMenuClose();
  };

  const chats = [
    {
      id: 1,
      name: 'sajidztech',
      lastMessage: 'dasdas',
      time: 'Now',
      unread: 0, // Assuming unread indicator in image is for selected chat only
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'שרה לוי',
      lastMessage: 'תודה על העסקה!',
      time: 'אתמול',
      unread: 2,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'sajidztech',
      text: 'dasdas',
      time: '11:39 PM',
      isReceived: true
    },
    {
      id: 2,
      sender: 'sajidztech',
      text: 'Started today',
      time: '',
      isReceived: true
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      direction: 'ltr',
      fontFamily: "'Poppins', sans-serif",
      mt: '40px',
      mb: '20px',
      mx: 'auto',
      width: 'calc(100% - 180px)',
      maxWidth: 'lg',
      height: 'calc(100vh - 100px)',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: 2,
      overflow: 'hidden'
    }}>
   
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
      }}>
        {/* Chat List */}
        <Paper
          elevation={0}
          sx={{
            width: isMobile ? '100%' : '30%',
            display: selectedChat && isMobile ? 'none' : 'flex',
            flexDirection: 'column',
            borderRight: '1px solid #e0e0e0',
            borderRadius: 0,
            backgroundColor: 'white'
          }}
        >
           {/* Chat List Header */}
           <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: '#000' }}>
               Messages
             </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton sx={{ color: '#757575' }} size="small">
                  <MoreVertIcon />
                </IconButton>
                <IconButton sx={{ color: '#757575' }} size="small">
                  <EditIcon />
                </IconButton>
              </Box>
           </Box>

          {/* Search */}
          <Box sx={{
            p: 2,
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: 'white'
          }}>
            <TextField
              fullWidth
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#757575' }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2, backgroundColor: '#f5f5f5', fontFamily: "'Poppins', sans-serif" }
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 }}}
            />
          </Box>

          <List sx={{ p: 0, flexGrow: 1, overflowY: 'auto' }}>
            {chats.map((chat) => (
              <ListItem
                key={chat.id}
                button
                selected={selectedChat?.id === chat.id}
                onClick={() => setSelectedChat(chat)}
                sx={{
                  borderBottom: '1px solid #e0e0e0',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#fffbe5'
                  },
                  position: 'relative',
                  '&:hover .more-icon': {
                    visibility: 'visible',
                  },
                }}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={selectedChat?.id === chat.id ? 0 : chat.unread}
                    color="error"
                    invisible={selectedChat?.id === chat.id ? true : chat.unread === 0}
                  >
                    <Avatar src={chat.avatar} />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  sx={{ mr: 4 }}
                  primary={
                    <Typography variant="subtitle1" sx={{
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      color: '#000'
                    }}>
                      {chat.name}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: chat.unread > 0 && selectedChat?.id !== chat.id ? '#000' : '#757575',
                        fontWeight: chat.unread > 0 && selectedChat?.id !== chat.id ? 600 : 400,
                         fontSize: 14
                      }}>
                        {`${chat.lastMessage}`.includes('You:') ? `${chat.lastMessage}` : `You: ${chat.lastMessage}`}
                      </Typography>
                       <Typography variant="caption" sx={{ color: '#757575' }}>
                         • {chat.time}
                       </Typography>
                    </Box>
                  }
                />
                <IconButton
                  className="more-icon"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 8,
                    transform: 'translateY(-50%)',
                    visibility: 'hidden',
                    color: '#757575',
                    '&:hover': { color: '#000' },
                    p: 0.5
                  }}
                  onClick={(event) => handleMenuClick(event, chat.id)}
                >
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
          </List>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && openMenuId !== null}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMarkAsUnread}>
              <ListItemIcon>
                <MailOutlineIcon fontSize="small" />
              </ListItemIcon>
              Mark as unread
            </MenuItem>
            <MenuItem onClick={handleArchive}>
              <ListItemIcon>
                <ArchiveIcon fontSize="small" />
              </ListItemIcon>
              Archive
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              Delete
            </MenuItem>
          </Menu>

        </Paper>

        {/* Chat Area */}
        {selectedChat && (
          <Paper
            elevation={0}
            sx={
            {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              width: isMobile ? '100%' : '70%',
              backgroundColor: '#f5f5f5'
            }}
          >
            {/* Chat Header */}
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 0,
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: 'white'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {isMobile && (
                   <IconButton
                    edge="start"
                    onClick={() => setSelectedChat(null)}
                    sx={{ color: '#000' }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                )}
                <Avatar src={selectedChat.avatar} />
                <Box>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    color: '#000'
                  }}>
                    {selectedChat.name}
                  </Typography>
                  <Typography variant="caption" sx={{
                    color: '#757575',
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Started today
                  </Typography>
                </Box>
              </Box>
              <IconButton sx={{ color: '#757575' }}>
                <MoreVertIcon />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box sx={{
              flex: 1,
              p: 2,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Typography variant="caption" alignSelf="center" sx={{ mb: 2, color: '#757575' }}>Today</Typography>

              {messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.isReceived ? 'flex-start' : 'flex-end',
                    mb: 2
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      backgroundColor: 'white',
                      color: '#000',
                      borderRadius: 2,
                      border: '1px solid #e0e0e0'
                    }}
                  >
                    <Typography variant="body2" sx={{
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {msg.text}
                    </Typography>
                    <Typography variant="caption" sx={{
                      display: 'block',
                      mt: 0.5,
                      color: '#757575',
                      textAlign: msg.isReceived ? 'left' : 'right'
                    }}>
                      {msg.time}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>

            {/* Input Area */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderTop: '1px solid #e0e0e0',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton sx={{ color: '#757575' }}>
                  <CameraIcon />
                </IconButton>
                <IconButton sx={{ color: '#757575' }}>
                  <VideocamIcon />
                </IconButton>
                <TextField
                  fullWidth
                  placeholder="Write a message..."
                  variant="outlined"
                  size="small"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  InputProps={{
                     sx: { borderRadius: 2, backgroundColor: '#f5f5f5', fontFamily: "'Poppins', sans-serif", pr:0 },
                     endAdornment: (
                       <InputAdornment position="end">
                         <IconButton size="small" sx={{ color: '#757575' }}>
                           <TextFormatIcon />
                         </IconButton>
                          <IconButton size="small" sx={{ color: '#757575' }}>
                           <EmojiEmotionsIcon />
                         </IconButton>
                          <IconButton size="small" onClick={handleSendMessage} sx={{ color: '#ff9800' }}>
                           <SendIcon />
                         </IconButton>
                       </InputAdornment>
                     )
                  }}
                   sx={{
                    '& .MuiOutlinedInput-root': { borderRadius: 2 },
                    flexGrow: 1, // Allow text field to grow
                    mr: 1 // Add margin to the right to create space
                   }}
                />
              </Box>
               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, fontSize: 12, color: '#757575' }}>
                 <Typography variant="caption">Enter to Send</Typography>
                 <Typography variant="caption">Shift+Enter to add a new line</Typography>
               </Box>

            </Paper>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Chat;
