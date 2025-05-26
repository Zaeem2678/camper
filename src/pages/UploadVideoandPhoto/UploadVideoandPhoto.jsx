import React, { useState } from "react";
import { Box, Button, Typography, FormControl, Select, MenuItem } from "@mui/material";
import UploadVideoDialog from "../../components/PhotosandVideos/UploadVideobox";
import PhotoandVideoCard from "../../components/PhotosandVideos/PhotoandVideoCard";
import AlbumCard from "../../components/PhotosandVideos/AlbumCard";
import { useLocation } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const sampleVideos = [
  {
    id: 1,
    thumbnail: "data:image/jpeg;base64,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",
    duration: "0:07",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    duration: "0:12",
  },
   {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    duration: "0:12",
  },
];

const sampleAlbums = [
  {
    id: 1,
    title: "My First Album",
    date: "May 22, 2023",
    photoCount: 10,
    videoCount: 2,
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
   {
    id: 2,
    title: "Vacation Fun",
    date: "June 15, 2023",
    photoCount: 25,
    videoCount: 5,
    thumbnailUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
];

export default function PhotoandVideoPage() {
  const [open, setOpen] = useState(false);
  const [aboutText, setAboutText] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [videos, setVideos] = useState(sampleVideos);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const location = useLocation();
  const isPhotosPage = location.pathname.includes('my-photos');
  const [currentView, setCurrentView] = useState(isPhotosPage ? 'photos' : 'videos');
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [uploadType, setUploadType] = useState(null);
  const [visibilityDialog, setVisibilityDialog] = useState("public");
  const [albumVisibility, setAlbumVisibility] = useState('public');

  const handleDelete = (id) => {
    setVideos((v) => v.filter((video) => video.id !== id));
    setSelectedVideos([]);
    setSelectedAlbum(null);
  };

  const handleCardSelect = (id) => {
    setSelectedVideos(prevSelected => 
      prevSelected.includes(id)
        ? prevSelected.filter(videoId => videoId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedVideos.length === videos.length) {
      // If all are selected, deselect all
      setSelectedVideos([]);
    } else {
      // Otherwise, select all
      setSelectedVideos(videos.map(video => video.id));
    }
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    setSelectedVideos([]);
    setSelectedAlbum(null);
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentView('albumContents');
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setCurrentView('albums');
    setSelectedVideos([]);
  };

  const handleUploadClick = (type) => {
    setUploadType(type);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setUploadType(null);
    setAboutText("");
    setVisibilityDialog("public");
  };

  const itemCount = 
    currentView === 'photos' || currentView === 'videos' 
      ? videos.length 
      : selectedAlbum ? `${selectedAlbum.photoCount} photos · ${selectedAlbum.videoCount} videos` : sampleAlbums.length;
  const itemType = 
    currentView === 'photos' ? 'Photos' : currentView === 'videos' ? 'Videos' : selectedAlbum ? selectedAlbum.title : 'Albums';

  return (
    <>
      {/* Top row: Item count/type */}
      <Box sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, px: 1, mb: 1 }}> {/* Added mb */}
        {/* Count and Type Text */}
        <Typography variant="subtitle1">
          {itemCount} {itemType}
        </Typography>
      </Box>

      <Box sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, p: 2,mb:1,border:"1px solid #ccc",borderRadius:3,pb:6,pt:3}}> 

        {/* Header content based on view */}
        {/* Main Add Button (visible only when not viewing a specific album)*/}
        {!selectedAlbum && (
           <Button 
            onClick={() => setOpen(true)} 
            sx={{
              minWidth:120, 
              mb: 2, // Keep margin bottom here
              fontSize:12, 
              color:"#000",
              backgroundColor:"#f0f2f5",
              '&:hover': {
                backgroundColor: "#385DFF",
                color: '#fff',
              },
            }}
          >
            Add {currentView === 'photos' || currentView === 'videos' ? (isPhotosPage ? 'Photos' : 'Videos') : 'Album'}
          </Button>
        )}

        {/* Photos/Albums toggle and icons on photos page (visible only when on photos page) */}
        {isPhotosPage && (
           <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}> {/* Adjusted mb */}
            <Button 
              sx={{
                minWidth: 90,
                fontSize: 11,
                py: 0.5,
                color: currentView === 'photos' ? '#000' : '#ccc', 
                backgroundColor: currentView === 'photos' ? '#f0f2f5' : 'transparent', 
                '&:hover': {
                  backgroundColor: "#385DFF",
                  color: '#fff',
                },
              }}
              onClick={() => handleViewChange('photos')}
            >
              Photos
            </Button>
            <Button 
              sx={{
                minWidth: 90,
                fontSize: 11,
                py: 0.5,
                color: currentView === 'albums' ? '#000' : '#ccc', 
                backgroundColor: currentView === 'albums' ? '#f0f2f5' : 'transparent', 
                '&:hover': {
                  backgroundColor: "#385DFF",
                  color: '#fff',
                },
              }}
              onClick={() => handleViewChange('albums')}
            >
              Albums
            </Button>
            {currentView === 'photos' && ( // Icons only visible in Photos view
              <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
                <DeleteOutlineIcon sx={{ color: '#FFA500' }} />
                <CheckCircleOutlineIcon 
                  sx={{
                    color: selectedVideos.length > 0 ? '#385DFF' : '#FFA500',
                    cursor: 'pointer'
                  }}
                  onClick={handleSelectAll}
                />
              </Box>
            )}
          </Box>
        )}

        {/* Album Contents Header (when album is selected) */}
        {currentView === 'albumContents' && selectedAlbum && (
          <Box sx={{ mb: 4 }}> {/* Added margin bottom for spacing */}
            {/* Row 1: Title and Edit */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
               <Typography variant="h5" sx={{ mr: 2 }}>{selectedAlbum.title}</Typography>
               <Button variant="contained" sx={{ backgroundColor: '#FFA500', color: '#fff', fontSize: 12, '&:hover': { backgroundColor: '#FF8C00' } }}>Edit</Button>
            </Box>

            {/* Row 2: Date and Counts */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
               <Typography variant="body2" color="text.secondary">{selectedAlbum.date} · {selectedAlbum.photoCount} photos · {selectedAlbum.videoCount} videos</Typography>
            </Box>

            {/* Row 3: Buttons, Dropdown, Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> {/* Removed mb here, added to parent Box */}
               <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button 
                    sx={{
                      minWidth: 120,
                      fontSize: 12,
                      py: 0.5,
                      color: "#E53935", // Red color for Delete
                      border: '1px solid #E53935',
                      backgroundColor: "transparent",
                      '&:hover': {
                        backgroundColor: "#E53935",
                        color: '#fff',
                      },
                    }}
                  >
                    Delete Album
                  </Button>
                  <Button 
                    sx={{
                      minWidth: 120,
                      fontSize: 12,
                      py: 0.5,
                      color: "#000",
                      backgroundColor: "#f0f2f5",
                      '&:hover': {
                        backgroundColor: "#385DFF",
                        color: '#fff',
                      },
                    }}
                    onClick={() => handleUploadClick('photo')}
                  >
                    Add Photos
                  </Button>
                   <Button 
                    sx={{
                      minWidth: 120,
                      fontSize: 12,
                      py: 0.5,
                      color: "#000",
                      backgroundColor: "#f0f2f5",
                      '&:hover': {
                        backgroundColor: "#385DFF",
                        color: '#fff',
                      },
                    }}
                     onClick={() => handleUploadClick('video')}
                  >
                    Add Videos
                  </Button>
               </Box>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* Privacy Dropdown */}
                   <FormControl sx={{ minWidth: 120 }} size="small">
                      <Select
                        value={albumVisibility}
                        onChange={(e) => setAlbumVisibility(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Album visibility' }}
                        sx={{ fontSize: 12, '.MuiOutlinedInput-notchedOutline': { border: '1px solid #ccc !important' } }}
                      >
                        <MenuItem value="public">Public</MenuItem>
                        <MenuItem value="all_members">All Members</MenuItem>
                        <MenuItem value="my_connections">My Connections</MenuItem>
                        <MenuItem value="only_me">Only Me</MenuItem>
                      </Select>
                    </FormControl>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <DeleteOutlineIcon sx={{ color: '#FFA500' }} />
                    <CheckCircleOutlineIcon 
                      sx={{
                        color: selectedVideos.length > 0 ? '#385DFF' : '#FFA500',
                        cursor: 'pointer'
                      }}
                      onClick={handleSelectAll}
                    />
                  </Box>
               </Box>
            </Box>
          </Box>
        )}

        {/* Content Display Area */}
        {currentView === 'photos' || currentView === 'videos' ? (
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {videos.map((video) => (
              <PhotoandVideoCard 
                key={video.id} 
                video={video} 
                onDelete={handleDelete}
                isPhoto={currentView === 'photos'}
                selected={selectedVideos.includes(video.id)}
                onSelectToggle={() => handleCardSelect(video.id)}
              />
            ))}
          </Box>
        ) : currentView === 'albums' ? (
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {sampleAlbums.map((album) => (
                <AlbumCard 
                  key={album.id} 
                  album={album} 
                  onClick={() => handleAlbumClick(album)}
                />
              ))}
            </Box>
          ) : ( /* currentView === 'albumContents' */
             <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {/* Display contents of the selected album here */}
              {/* For now, displaying sampleVideos as placeholder */}
               {videos.map((video) => (
                <PhotoandVideoCard 
                  key={video.id} 
                  video={video} 
                  onDelete={handleDelete}
                  isPhoto={true} // Assuming album contents are photos for now
                  selected={selectedVideos.includes(video.id)}
                  onSelectToggle={() => handleCardSelect(video.id)}
                />
              ))}
            </Box>
          )
        }

        <UploadVideoDialog
          open={open}
          onClose={handleDialogClose}
          aboutText={aboutText}
          setAboutText={setAboutText}
          visibility={visibilityDialog}
          setVisibility={setVisibilityDialog}
          isPhoto={uploadType === 'photo'}
          albumId={selectedAlbum && (uploadType === 'photo' || uploadType === 'video') ? selectedAlbum.id : null}
        />
      </Box>
    </>
  );
}
