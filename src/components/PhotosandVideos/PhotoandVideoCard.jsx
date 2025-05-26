import React, { useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ChangeThumbnailDialog from "./ChangeThumbnailbox";
import VideoDetailDialog from "./VideoDeatilDialogBox";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ImageIcon from "@mui/icons-material/Image";

export default function PhotoandVideoCard({ video, onDelete, isPhoto, selected, onSelectToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [thumbnailDialogOpen, setThumbnailDialogOpen] = useState(false);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    onDelete(video.id);
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          cursor: "pointer",
          "&:hover .hoverShow": { opacity: 1 },
          width: isPhoto ? 150 : 240,
          height: isPhoto ? 150 : 240,
        }}
        onClick={() => setDetailDialogOpen(true)}
      >
        {/* Thumbnail */}
        <Box
          component="img"
          src={video.thumbnail}
          alt={isPhoto ? "photo" : "video"}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Play/View icon always visible with black bg and white icon */}
        {!isPhoto && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 40, color: "white", backgroundColor: "black" }} />
          </Box>
        )}

        {/* Tick icon - top left, visible only on hover or if selected */}
        <Box
          className="hoverShow"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            opacity: selected ? 1 : 0,
            transition: "0.3s ease",
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: selected ? "transparent" : "rgba(255,255,255,0.1)",
            },
          }}
          onClick={onSelectToggle}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 22,
              color: selected ? "primary.main" : "white",
              border: selected ? "2px solid" : "1px solid white",
              borderColor: selected ? "primary.main" : "white",
              borderRadius: "50%",
              backgroundColor: selected ? "white" : "transparent",
              transition: "none",
            }}
          />
        </Box>

        <Box
          className="hoverShow"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            opacity: 0,
            transition: "0.3s ease",
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <IconButton
            size="small"
            sx={{ color: "white", p: 0.5 }}
            onClick={handleMenuClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { borderRadius: 2, minWidth: 180 } }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setThumbnailDialogOpen(true);
              }}
            >
              <EditIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Change {isPhoto ? 'Photo' : 'Thumbnail'}</Typography>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <DriveFileMoveIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Move</Typography>
            </MenuItem>
            <MenuItem onClick={handleDelete}>
              <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Delete</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* Duration label - only show for videos */}
        {!isPhoto && (
          <Chip
            label={video.duration}
            size="small"
            sx={{
              position: "absolute",
              bottom: 8,
              left: 8,
              borderRadius: 2,
              px: 1,
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              fontSize: 12,
            }}
          />
        )}
      </Box>

      {/* Dialogs */}
      <ChangeThumbnailDialog
        open={thumbnailDialogOpen}
        onClose={() => setThumbnailDialogOpen(false)}
        video={video}
        isPhoto={isPhoto}
      />
      <VideoDetailDialog
        open={detailDialogOpen}
        onClose={() => setDetailDialogOpen(false)}
        video={video}
        isPhoto={isPhoto}
      />
    </>
  );
}
