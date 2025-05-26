import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default function Infocomp(props) {
    return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      border: '1px solid #ddd',
      borderRadius: 2,
      padding: 1,
      backgroundColor: '#fff',
      wordWrap: 'break-word',
 
   
      mb:2,
    }}
  >
    <InfoIcon sx={{ fontSize: 28, color: '#385DFF' }} />
    <Typography color="text.secondary" sx={{ margin: 0 ,backgroundColor:"#fff",fontSize:"12px"}}>
   {props.text}
    </Typography>
  </Box>
    )
}
