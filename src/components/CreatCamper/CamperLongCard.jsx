
import { Box, Typography,} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CamperLongCard = ({
  image,
  title,
  location,
  type,
  status = 'pending',
  manager = 'Manager',
  calander = 'Calander',
  isCompleted = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 2,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        bgcolor: '#fff',
        mb: 2,
        
      }}
    >
    
      <Box component="img" src={image} alt="camper" sx={{ width: 100, height: 100, borderRadius: 1, objectFit: 'cover' }} />

      
      <Box sx={{ maxWidth:"25%"}}>
        <Typography sx={{ fontWeight: 500, fontSize: 12 }}>{title}</Typography>
        <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>{location}</Typography>
        <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>{type}</Typography>

        <Box
          sx={{
            mt: 1,
            display: 'inline-block',
            px: 1,
            py: 0.5,
            fontSize: 10,
            fontWeight: 600,
            bgcolor: '#00BCD4',
            color: '#fff',
            borderRadius: 10,
            textTransform: 'capitalize',
          }}
        >
          {status}
        </Box>
      </Box>

    
      <Box sx={{ textAlign: 'left', minWidth: 80 }}>
        <Typography sx={{ fontSize: 13 }}>{location}</Typography>
        <Typography sx={{ fontSize: 13 }}>{type}</Typography>
      </Box>

    
      <Box sx={{ minWidth: 80, textAlign: 'center' }}>
        <Typography sx={{ color: '#FF9B00', fontWeight: 600,fontSize:13 }}>{calander}</Typography>
        <Typography sx={{ color: '#FF9B00', fontWeight: 600 ,fontSize:13}}>{manager}</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {isCompleted && (
          <CheckCircleIcon sx={{ color: '#0A4DA2', fontSize: 18}} />
        )}
        <Typography sx={{ fontSize: 12, color: '#0A4DA2' }}>
          You have filled all fields
        </Typography>
      </Box>
    </Box>
  );
};

export default CamperLongCard;
