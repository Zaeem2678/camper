import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Typography,
  Box,
  Button,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AlbumIcon from "@mui/icons-material/Album";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";

export default function UploadVideoDialog({
  open,
  onClose,
  aboutText,
  setAboutText,
  visibility,
  setVisibility,
  onDone,
  isPhoto,
}) {
  const [videoFiles, setVideoFiles] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [showAlbumView, setShowAlbumView] = useState(false);
  const [showNewAlbumForm, setShowNewAlbumForm] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [newAlbumPrivacy, setNewAlbumPrivacy] = useState("public");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (files) => {
    const validFiles = Array.from(files).filter((file) =>
      isPhoto ? file.type.startsWith("image/") : file.type.startsWith("video/")
    );
    if (validFiles.length === 0) {
      alert(`Please upload valid ${isPhoto ? 'image' : 'video'} files.`);
      return;
    }
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);

    const newFiles = validFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    setVideoFiles((prev) => [...prev, ...newFiles]);
  };

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const onFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files);
      e.target.value = null;
    }
  };

  const removeFile = (id) => {
    setVideoFiles((prev) => {
      const toRemove = prev.find((v) => v.id === id);
      if (toRemove) {
        URL.revokeObjectURL(toRemove.url);
      }
      return prev.filter((v) => v.id !== id);
    });
  };

  const handleCreateAlbum = () => {
    if (!newAlbumTitle.trim()) {
      alert("Please enter album title");
      return;
    }
    const newAlbum = {
      id: Math.random().toString(36).substr(2, 9),
      title: newAlbumTitle,
      privacy: newAlbumPrivacy,
    };
    setAlbums((prev) => [...prev, newAlbum]);
    setSelectedAlbumId(newAlbum.id);
    setNewAlbumTitle("");
    setNewAlbumPrivacy("public");
    setShowNewAlbumForm(false);
    setShowAlbumView(true);
  };

  const selectedAlbum = albums.find(album => album.id === selectedAlbumId);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "600px",
          maxWidth: "90%",
          borderRadius: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          pt: 2,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', py:1 }}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
             <Typography fontSize={18} fontWeight={600}>
               {showNewAlbumForm ? 'Create Album' : 'Upload'}
             </Typography>
             {!showNewAlbumForm && (
               <Typography fontSize={12} color="text.secondary">
                 {`${videoFiles.length} out of ${videoFiles.length} uploaded`}
               </Typography>
             )}
           </Box>
            <IconButton onClick={onClose} sx={{ mt: -1 }}>
             <CloseIcon />
            </IconButton>
        </Box>
        {showAlbumView && !showNewAlbumForm && (
            <Typography fontSize={12} color="text.secondary">
                {selectedAlbum ? `Albums > ${selectedAlbum.title}` : 'Albums'}
            </Typography>
        )}
      </Box>

      <Divider sx={{ my: 1 }} />

      <DialogContent
        sx={{
          maxHeight: "60vh",
          overflowY: "auto",
          px: 3,
          pb: 2,
          py:3
        }}
      >
        {!showAlbumView ? (
          <>
            {/* Description box */}
            <TextField
              label={`Write about the ${isPhoto ? 'photo' : 'video'}`}
              multiline
              fullWidth
              rows={2}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              sx={{ mb: 3 }}
            />

            {/* Upload + preview box */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                mb: 3,
                alignItems: "flex-start",
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
            >
              <Box
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: 2,
                  bgcolor: "#f5f5f5",
                  cursor: "pointer",
                  flex: videoFiles.length > 0 ? "0 0 200px" : "1 1 100%",
                  height: videoFiles.length > 0 ? 120 : 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#999",
                  textAlign: "center",
                  px: 2,
                  position: "relative",
                }}
                onClick={() => document.getElementById("file-upload-input").click()}
              >
                {isPhoto ? (
                  <ImageIcon sx={{ fontSize: 30, mb: 1 }} />
                ) : (
                  <VideoLibraryIcon sx={{ fontSize: 30, mb: 1 }} />
                )}
                <Typography fontSize={14} fontWeight={600}>
                  Add {isPhoto ? 'photo' : 'video'}
                </Typography>
                <Typography fontSize={14}>Drag & drop {isPhoto ? 'photo' : 'video'}</Typography>

                <input
                  type="file"
                  accept={isPhoto ? "image/*" : "video/*"}
                  id="file-upload-input"
                  multiple
                  style={{ display: "none" }}
                  onChange={onFileInputChange}
                />
              </Box>

              {/* File previews */}
              {videoFiles.map(({ url, id }) => (
                <Box
                  key={id}
                  sx={{
                    position: "relative",
                    flex: "0 0 200px",
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid #ccc",
                    height: 120,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => removeFile(id)}
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      bgcolor: "rgba(255,255,255,0.3)",
                      zIndex: 10,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 12 }} />
                  </IconButton>

                  {isUploading && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 5,
                      }}
                    >
                      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress
                          variant="determinate"
                          value={uploadProgress}
                          size={40}
                          sx={{ color: 'white' }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            sx={{ color: 'white', fontSize: '0.75rem' }}
                          >
                            {`${Math.round(uploadProgress)}%`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {isPhoto ? (
                    <img
                      src={url}
                      alt="preview"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      src={url}
                      controls
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* Select Album button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
                color: "primary.main",
                gap: 0.5,
                mt: 3,
                userSelect: "none",
              }}
              onClick={() => setShowAlbumView(true)}
            >
              <AlbumIcon fontSize="small" />
              <Typography variant="body2" fontWeight={600}>
                Select Album
              </Typography>
            </Box>
          </>
        ) : (
          /* Album Section */
          <Box>
            {showNewAlbumForm ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* New Album Form */}
                <TextField
                  label="Album Title"
                  fullWidth
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                />
                 <FormControl fullWidth>
                  <InputLabel id="privacy-label">Privacy</InputLabel>
                  <Select
                    labelId="privacy-label"
                    value={newAlbumPrivacy}
                    label="Privacy"
                    onChange={(e) => setNewAlbumPrivacy(e.target.value)}
                  >
                    <MenuItem value="public">Public</MenuItem>
                    <MenuItem value="all-members">All members</MenuItem>
                    <MenuItem value="my-connections">My connections</MenuItem>
                    <MenuItem value="only-me">Only me</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {showAlbumView && !showNewAlbumForm && (
                  <Typography fontSize={12} color="text.secondary">
                    {selectedAlbum ? `Albums > ${selectedAlbum.title}` : 'Albums'}
                  </Typography>
                )}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minHeight: '200px',
                    border: '1px solid #ccc',
                    borderRadius: 1,
                    overflow: 'hidden'
                  }}
                >
                  {/* Album List */}
                  {albums.map((album, index) => (
                    <Box
                      key={album.id}
                      onClick={() => setSelectedAlbumId(album.id)}
                      sx={{
                        borderBottom: index !== albums.length - 1 ? '1px solid #ccc' : 'none',
                        p: 1,
                        cursor: "pointer",
                        bgcolor: selectedAlbumId === album.id ? "#e3f2fd" : "transparent",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        }
                      }}
                    >
                      <AlbumIcon fontSize="small" />
                      <Typography fontWeight={600} variant="body2">{album.title}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  onClick={() => setShowNewAlbumForm(true)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    cursor: 'pointer',
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary'
                    }
                  }}
                >
                  <AddIcon fontSize="small" />
                  <Typography fontSize={14}>
                    Create New Album
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </DialogContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          pt: 1.5,
          borderTop: "1px solid #eee",
          gap: 1,
          py: 2
        }}
      >
         <Box>
           {!showAlbumView && (
             <Select
               value={visibility}
               onChange={(e) => setVisibility(e.target.value)}
               size="small"
               sx={{ width: 180 }}
             >
               <MenuItem value="public">Public</MenuItem>
               <MenuItem value="all-members">All members</MenuItem>
               <MenuItem value="my-connections">My connections</MenuItem>
               <MenuItem value="only-me">Only me</MenuItem>
             </Select>
           )}
         </Box>

         <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
           {showAlbumView && !showNewAlbumForm && (
             <Button
               onClick={() => setShowAlbumView(false)}
             >
               Back
             </Button>
           )}

           {showAlbumView && showNewAlbumForm && (
             <Button sx={{backgroundColor: "primary.main", color: "white", fontWeight: 600, textTransform: "none", "&:hover": { backgroundColor: "primary.dark", },}} onClick={handleCreateAlbum}>
               Create Album
             </Button>
           )}

           {!(showAlbumView && showNewAlbumForm) && (
             <Button
               variant="contained"
               color="primary"
               onClick={() => onDone && onDone(videoFiles, selectedAlbumId)}
               sx={{
                 backgroundColor: "primary.main",
                 color: "black",
                 fontWeight: 600,
                 textTransform: "none",
                 "&:hover": {
                   backgroundColor: "primary.dark",
                 },
               }}
               disabled={videoFiles.length === 0 && !showAlbumView}
             >
               Done
             </Button>
           )}

           {showAlbumView && showNewAlbumForm && (
             <Button
               onClick={() => setShowNewAlbumForm(false)}
             >
               Cancel
             </Button>
           )}
         </Box>
      </Box>
    </Dialog>
  );
}
