import React, { useState } from 'react';
import { Box, Typography, Divider, Grid, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import KitchenIcon from '@mui/icons-material/Kitchen'; // generic cooking icon
import AcUnitIcon from '@mui/icons-material/AcUnit'; // air conditioning
import RouterIcon from '@mui/icons-material/Router'; // generic network icon for Bluetooth etc
import SettingsIcon from '@mui/icons-material/Settings'; // generic icon
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'; // for battery
import TvIcon from '@mui/icons-material/Tv';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DevicesIcon from '@mui/icons-material/Devices';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SpeakerIcon from '@mui/icons-material/Speaker';
import DeckIcon from '@mui/icons-material/Deck'; // generic roof/window
import PowerIcon from '@mui/icons-material/Power';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import ActionButtons from './ActionsButtons';

// Map equipment names to icons (add more if you want)
const iconMap = {
  "Cooling box": KitchenIcon,
  "Gas cartridge": LocalGasStationIcon,
  "mobile gas cooker": KitchenIcon,
  "Oven": LocalLaundryServiceIcon,
  "Refrigerator": AcUnitIcon,
  "Refrigerator with freezer": AcUnitIcon,
  "Stove": KitchenIcon,

  "Adapter": PowerIcon,
  "Air conditioning": AcUnitIcon,
  "Air suspension": DeviceHubIcon,
  "Audio system": SpeakerIcon,
  "Awning": DeckIcon,
  "Blackout singing o-laws": CategoryIcon,
  "Blu-Ray": DevicesIcon,
  "Bluetooth": RouterIcon,
  "Cabinets": DeckIcon,
  "Cable drum": CategoryIcon,
  "CD": DevicesIcon,
  "Central lock": SettingsIcon,
  "Coffee maker": KitchenIcon,
  "Double floor": DeckIcon,
  "DVD": DevicesIcon,
  "Electric windows": DeckIcon,
  "Folding sun roof": DeckIcon,
  "Freezer": AcUnitOutlinedIcon,
  "Furnace": CategoryIcon,
  "Gas stove": LocalGasStationIcon,
  "Heated water and waste water tank": CategoryIcon,
  "Heating": PowerIcon,
  "High-current connection": PowerIcon,
  "Insulating glazing": DeckIcon,
  "iPhone": DevicesIcon,
  "Leather seats": CategoryIcon,
  "Line-in": DevicesIcon,
  "Mobile camping toilet": CategoryIcon,
  "Mp3": DevicesIcon,
  "Navigation": RouterIcon,
  "Original California equipment": CategoryIcon,
  "Rear view camera": CameraAltIcon,
  "Roof window": DeckIcon,
  "SAT system": RouterIcon,
  "Seat heating": PowerIcon,
  "Servo steering": SettingsIcon,
  "Shower": CategoryIcon,
  "Snow chains": CategoryIcon,
  "Solar panels": BatteryChargingFullIcon,
  "Sun sails": DeckIcon,
  "Supply battery": BatteryChargingFullIcon,
  "Tempo matrice": CategoryIcon,
  "Toilet": CategoryIcon,
  "TV": TvIcon,
  "Up-cereat": CategoryIcon,
  "USB": DevicesIcon,
  "Water canister": CategoryIcon,
  "Winter tyres": CategoryIcon,
};

const iconOptionsMain = [
  "Cooling box", "Gas cartridge", "mobile gas cooker", "Oven",
  "Refrigerator", "Refrigerator with freezer", "Stove"
];

const iconOptionsOthers = [
  "Adapter", "Air conditioning", "Air suspension", "Audio system", "Awning",
  "Blackout singing o-laws", "Blu-Ray", "Bluetooth", "Cabinets", "Cable drum",
  "CD", "Central lock", "Coffee maker", "Double floor", "DVD",
  "Electric windows", "Folding sun roof", "Freezer", "Furnace", "Gas stove",
  "Heated water and waste water tank", "Heating", "High-current connection",
  "Insulating glazing", "iPhone", "Leather seats", "Line-in",
  "Mobile camping toilet", "Mp3", "Navigation", "Original California equipment",
  "Rear view camera", "Refrigerator", "Roof window", "SAT system",
  "Seat heating", "Servo steering", "Shower", "Snow chains", "Solar panels",
  "Sun sails", "Supply battery", "Tempo matrice", "Toilet", "TV",
  "Up-cereat", "USB", "Water canister", "Winter tyres"
];

const Equipments = () => {
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [hasRoofProof, setHasRoofProof] = useState(null); // true, false, or null

  const toggleEquipment = (item) => {
    setSelectedEquipments((prev) =>
      prev.includes(item)
        ? prev.filter((el) => el !== item)
        : [...prev, item]
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Equipments
      </Typography>

      <Typography variant="body1" fontWeight={700} mb={2}>
        Guide all of your camper's equipment and help your guests imagine their trip to your camper.
      </Typography>

      <Typography variant="h6" fontWeight={500}>Cooking </Typography>
      <Divider sx={{ my: 3 }} />

      <Grid container spacing={2}>
        {iconOptionsMain.map((item) => {
          const IconComponent = iconMap[item] || CategoryIcon;
          const selected = selectedEquipments.includes(item);
          return (
            <Grid item xs={6} sm={4} md={3} key={item}>
              <Box
                onClick={() => toggleEquipment(item)}
                sx={{
                  border: selected ? '2px solid' : '1px solid #ccc',
                  borderColor: selected ? 'primary.main' : '#ccc',
                  borderRadius: 2,
                  p: 1.5,
                  textAlign: 'center',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <IconComponent color={selected ? 'primary' : 'inherit'} />
                <Typography variant="body2">{item}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="h6" fontWeight={500} mt={4}>
        Others
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {iconOptionsOthers.map((item) => {
          const IconComponent = iconMap[item] || CategoryIcon;
          const selected = selectedEquipments.includes(item);
          return (
            <Grid item xs={6} sm={4} md={3} key={item}>
              <Box
                onClick={() => toggleEquipment(item)}
                sx={{
                  border: selected ? '2px solid' : '1px solid #ccc',
                  borderColor: selected ? 'primary.main' : '#ccc',
                  borderRadius: 2,
                  p: 1.5,
                  textAlign: 'center',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <IconComponent color={selected ? 'primary' : 'inherit'} />
                <Typography variant="body2">{item}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4, mb: 1 }}>
        <Typography variant="h6" fontWeight={500}>
          Does your camper have a roof tent?
        </Typography>
        <Box>
          <IconButton
            onClick={() => setHasRoofProof(true)}
            color={hasRoofProof === true ? 'primary' : 'default'}
            sx={{ fontSize: 40 }}
          >
            <CheckCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            onClick={() => setHasRoofProof(false)}
            color={hasRoofProof === false ? 'primary' : 'default'}
            sx={{ fontSize: 40 }}
          >
            <CancelIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" my={2} width="70%">
        Join us, whether your camper has a roof tent, or whether it is a standard motorhome without a roof tent.
      </Typography>

      <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Equipments;
