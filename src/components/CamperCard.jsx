import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Avatar, Rating, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BedIcon from '@mui/icons-material/Bed';
import PetsIcon from '@mui/icons-material/Pets';
import BlockIcon from '@mui/icons-material/Block';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const CamperCard = ({
  images = [],
  price = 100,
  location = "Eisenach",
  rating = 0,
  title = "Master Beauty Camper",
  beds = 4,
  petsAllowed = true,
  transmission = "C1E",
  ownerImg,
  ownerName
}) => {
  const [imgIdx, setImgIdx] = useState(0);

  const handlePrev = () => setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Card sx={{ width: 300, borderRadius: 4, overflow: 'hidden', boxShadow: 4, position: 'relative' }}>
      <Box sx={{ position: 'relative', m: 1.2, mb: 0 }}>
        <CardMedia
          component="img"
          height="300"
          image={images[imgIdx]}
          alt={title}
          sx={{ borderRadius: 3, objectFit: 'cover' }}
        />
        {images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{ position: 'absolute', top: '50%', left: -2, transform: 'translateY(-50%)', bgcolor: 'transparent', color: '#fff' }}
            >
                <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{ position: 'absolute', top: '50%', right: -7, transform: 'translateY(-50%)', bgcolor: 'transparent', color: '#fff' }}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </>
        )}
        {ownerImg && (
          <Avatar src={ownerImg} alt={ownerName} sx={{ position: 'absolute', top: 10, right: 10, width: 40, height: 40, border: '2px solid #fff' }} />
        )}
        <Box sx={{ position: 'absolute', bottom: 8, left: 10, bgcolor: 'rgba(0, 0, 0, 0.81)', p: 0.5, borderRadius: 1 }}>
          <Typography color="white" fontWeight={500} fontSize={13}>
            From {price} € /day
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ py: 3, pb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={1} justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocationOnIcon fontSize="medium" sx={{ color: 'black' }} />
            <Typography variant="body2" sx={{ color: 'black', fontWeight: 500 }}>{location}</Typography>
          </Box>
          <Rating value={rating} readOnly size="medium" emptyIcon={<StarBorderIcon fontSize="inherit" />} />
        </Stack>
        <Typography  fontWeight={550} fontSize={17} gutterBottom>
          {title}
        </Typography>
        <Box sx={{ width: '100%', borderBottom: '1px solid #e0e0e0', my: 1 }} />
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <BedIcon fontSize="small" />
            <Typography variant="body2">{beds}</Typography>
          </Stack>
          <PetsIcon fontSize="small" color={petsAllowed ? "primary" : "disabled"} />
          <BlockIcon fontSize="small" color={!petsAllowed ? "error" : "disabled"} />
          <DirectionsCarIcon fontSize="small" />
          <Typography variant="body2">{transmission}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CamperCard; 