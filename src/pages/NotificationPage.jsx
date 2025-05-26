import {
    Box,
    Typography,
    Select,
    MenuItem,
    Button,
    Stack,
    Divider,
    Avatar,
    IconButton,
  } from "@mui/material";
  import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
  
  const notifications = [
    {
      id: 1,
      user: "gadgettrendz22",
      message: "has accepted your connection request",
      time: "2 months ago",
    },
    {
      id: 2,
      user: "gadgettrendz22",
      message: "has accepted your connection request",
      time: "2 months ago",
    },
  ];
  
  export default function NotificationPage() {
    return (
      <Box p={4} px={8}>
        {/* Title and Filters */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          mb={3}
        >
          <Typography  fontWeight={500}  fontSize={28}    >
            Notifications
          </Typography>
  
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Button color="secondary.main" size="small" sx={{borderRadius:1,border:"1px solid #ccc", height:30}}>Unread</Button>
            <Button color="secondary.main" size="small"      sx={{borderRadius:1,border:"1px solid #ccc", height:30}}>Read</Button>
            <Select
              defaultValue=""
              displayEmpty
              size="small"
              IconComponent={ArrowDropDownIcon}
              sx={{ minWidth: 220, height:35 }}
            >
              <MenuItem value="">- View All -</MenuItem>
              <MenuItem value="mentions">New Mentions</MenuItem>
              <MenuItem value="comment">New Activity Comment</MenuItem>
              <MenuItem value="post">New Activity Post</MenuItem>
              <MenuItem value="follower">New Follower</MenuItem>
              <MenuItem value="connection">Connection Request</MenuItem>
              <MenuItem value="groupRequest">Group Invitation and Request</MenuItem>
              <MenuItem value="groupPromo">Group Promotions</MenuItem>
              <MenuItem value="groupChanges">Group Detail Changes</MenuItem>
              <MenuItem value="formSub">Form Subscription</MenuItem>
              <MenuItem value="password">Password Changes</MenuItem>
            </Select>
          </Stack>
        </Stack>
  
        {/* Header Controls */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Select
            defaultValue=""
            displayEmpty
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">Bulk Actions</MenuItem>
            <MenuItem value="markRead">Mark as Read</MenuItem>
            <MenuItem value="delete">Delete</MenuItem>
          </Select>
  
          <Select
            defaultValue="newest"
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="oldest">Oldest First</MenuItem>
            <MenuItem value="newest">Newest First</MenuItem>
          </Select>
        </Stack>
  
        <Divider />
  
        {/* Notification List */}
        {notifications.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            p={2}
            borderBottom="1px solid #eee"
          >
            <Avatar sx={{ mx: 2 }} />
            <Box flexGrow={1}>
              <Typography fontSize="15px">
                <strong>{item.user}</strong> {item.message}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.time}
              </Typography>
            </Box>
            <IconButton>
              <VisibilityOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
  
        {/* Footer */}
        <Typography mt={2} color="text.secondary" fontSize="14px">
          Viewing 1 - {notifications.length} of {notifications.length} notifications
        </Typography>
      </Box>
    );
  }
  