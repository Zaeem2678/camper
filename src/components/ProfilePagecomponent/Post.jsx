import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  ListItemIcon,
} from '@mui/material';
import {
  ThumbUpOffAlt,
  ThumbUpAlt,
  ChatBubbleOutline,
  Public,
  ExpandMore,
  InsertPhoto,
  Videocam,
  EmojiEmotions,
  Send as SendIcon,
  MoreVert,
  Delete,

  PushPin,
  Download,
  NotificationsOff,
  Public as PublicIcon,
  Group,
  People,
  Lock,
} from '@mui/icons-material';


const reactions = [
  { label: 'like', icon: '👍' },
  { label: 'love', icon: '❤️' },
  { label: 'haha', icon: '😄' },
  { label: 'wow', icon: '😲' },
  { label: 'sad', icon: '😢' },
  { label: 'angry', icon: '😡' },
];

const Post = ({ post }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [reaction, setReaction] = useState(null);
  const [reactionMenuAnchor, setReactionMenuAnchor] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState(null);

  const open = Boolean(anchorEl);
  const moreMenuOpen = Boolean(moreMenuAnchor);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleReactionSelect = (r) => {
    setReaction(r);
    setReactionMenuAnchor(null);
  };

  const handleMoreMenuClick = (event) => {
    setMoreMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchor(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: 2,
        mb: 2,
        px: 2,
        py: 1.5,
      }}
    >
      {/* Top Section */}
      <Box display="flex" alignItems="flex-start" gap={2}>
        <Avatar src={post.user.avatar} />
        <Box>
          <Typography fontWeight={600} fontSize={14}>
            {post.user.name}{' '}
            <Typography component="span" color="text.secondary" fontSize={14}>
              {t('post.sharedPhoto')}
            </Typography>
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontSize={13} color="text.secondary">
              {post.time}
            </Typography>
            <Public sx={{ fontSize: 16, color: 'gray' }} />
            <IconButton onClick={handleClick} size="small" sx={{ p: 0 }}>
              <ExpandMore fontSize="small" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PublicIcon fontSize="small" />
                </ListItemIcon>
                {t('post.privacy.public')}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Group fontSize="small" />
                </ListItemIcon>
                {t('post.privacy.allMembers')}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <People fontSize="small" />
                </ListItemIcon>
                {t('post.privacy.myConnections')}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Lock fontSize="small" />
                </ListItemIcon>
                {t('post.privacy.onlyMe')}
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Three dots menu */}
        <IconButton
          onClick={handleMoreMenuClick}
          size="small"
          sx={{ marginLeft: 'auto' }}
        >
          <MoreVert fontSize="small" />
        </IconButton>
        <Menu
          anchorEl={moreMenuAnchor}
          open={moreMenuOpen}
          onClose={handleMoreMenuClose}
        >
          <MenuItem onClick={handleMoreMenuClose}>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            {t('post.actions.delete')}
          </MenuItem>
          <MenuItem onClick={handleMoreMenuClose}>
            <ListItemIcon>
              <PushPin fontSize="small" />
            </ListItemIcon>
            {t('post.actions.turnOffCommenting')}
          </MenuItem>
          <MenuItem onClick={handleMoreMenuClose}>
            <ListItemIcon>
              <PushPin fontSize="small" />
            </ListItemIcon>
            {t('post.actions.pinToFeed')}
          </MenuItem>
          <MenuItem onClick={handleMoreMenuClose}>
            <ListItemIcon>
              <Download fontSize="small" />
            </ListItemIcon>
            {t('post.actions.download')}
          </MenuItem>
          <MenuItem onClick={handleMoreMenuClose}>
            <ListItemIcon>
              <NotificationsOff fontSize="small" />
            </ListItemIcon>
            {t('post.actions.turnOffNotifications')}
          </MenuItem>
        </Menu>
      </Box>

      {/* Image */}
      {post.image && (
        <Box
          mt={2}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 220,
            overflow: 'hidden',
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={post.image}
            alt="post"
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      )}

      {/* Reaction Display */}
      {reaction && (
        <Box mt={1} ml={1} display="flex" alignItems="center" gap={1}>
          <Box fontSize={18}>{reaction.icon}</Box>
          <Typography fontSize={14} color="text.secondary">
            {t('post.reactionCount', { count: 5, reaction: t(`post.reactions.${reaction.label}`) })}
          </Typography>
        </Box>
      )}

      <Divider sx={{ my: 1.5 }} />

      {/* Like & Comment Buttons */}
      <Box display="flex" justifyContent="space-evenly" gap={15}>
        <Box
          onMouseEnter={(e) => setReactionMenuAnchor(e.currentTarget)}
          onMouseLeave={() => setReactionMenuAnchor(null)}
        >
          <Button
            startIcon={reaction ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
            sx={{
              textTransform: 'none',
              color: reaction ? 'primary.main' : 'secondary.main',
            }}
          >
            {reaction ? t(`post.reactions.${reaction.label}`) : t('post.reactions.like')}
          </Button>

          {reactionMenuAnchor && (
            <Box
              position="absolute"
              bgcolor="#fff"
              borderRadius={2}
              boxShadow={3}
              px={1}
              py={0.5}
              display="flex"
              gap={1}
              onMouseLeave={() => setReactionMenuAnchor(null)}
              sx={{ zIndex: 1000 }}
            >
              {reactions.map((r) => (
                <Box
                  key={r.label}
                  onClick={() => handleReactionSelect(r)}
                  sx={{
                    cursor: 'pointer',
                    fontSize: 24,
                    '&:hover': { transform: 'scale(1.2)' },
                    transition: 'transform 0.2s',
                  }}
                >
                  {r.icon}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Button
          startIcon={<ChatBubbleOutline />}
          sx={{ textTransform: 'none', color: 'secondary.main' }}
          onClick={() => setShowCommentBox((prev) => !prev)}
        >
          {t('post.comment.comment')}
        </Button>
      </Box>

      {/* Comment Section */}
      {showCommentBox && (
        <Box mt={2}>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" alignItems="flex-start" gap={1}>
            <Avatar src={post.user.avatar} sx={{ width: 35, height: 35, mt: '6px' }} />
            <Box
              sx={{
                flexGrow: 1,
                border: '1px solid #ccc',
                borderRadius: 3,
                p: 1,
                backgroundColor: '#f9f9f9',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder={t('post.comment.writeComment')}
                  InputProps={{
                    disableUnderline: true,
                    sx: { pl: 1, pr: 5 },
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: 4,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'primary.main',
                  }}
                >
                  <SendIcon fontSize="small" />
                </IconButton>
              </Box>

              <Box display="flex" gap={2} mt={1} pl={1}>
                <IconButton size="small">
                  <InsertPhoto fontSize="small" sx={{ color: 'gray' }} />
                </IconButton>
                <IconButton size="small">
                  <Videocam fontSize="small" sx={{ color: 'gray' }} />
                </IconButton>
                <IconButton size="small">
                  <EmojiEmotions fontSize="small" sx={{ color: 'gray' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Post;
