import React, { useState } from 'react';
import { Box, Typography, Button,} from '@mui/material';
import CaravanIcon from '../../assets/creat-camper/full-caravans.png';
import MotorhomeIcon from '../../assets/creat-camper/full-motorhomes.png';
import BoxVanIcon from '../../assets/creat-camper/full-box-vans.png';
import OtherIcon from '../../assets/creat-camper/full-caravans.png';
import ActionButtons from './ActionsButtons';

const styles = {
  label: { fontWeight: 500 },
  iconBox: (selected) => ({
    width: '150px',
    height: '100px',
    border: selected ? '2px solid #f90' : '1px solid #ccc',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: selected ? '#fff7e6' : '#fff',
  }),
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    flex: 1,
    width: '100%',
  },
  pillInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '9px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    width:240,
  },
  pillInput: {
    width:190,
    border: 'none',
    outline: 'none',
    padding: '10px 10px',
    fontSize: '16px',
  },
  unitBox: {
     width:60,
    padding: '10px 10px',
    backgroundColor: '#eee',
    fontWeight:500,
    fontSize:14,
  },
};

const Specification = () => {
  const [selectedType, setSelectedType] = useState('');
  const [form, setForm] = useState({
    brand: '',
    model: '',
    sleepingPlaces: '',
    day: '',
    month: '',
    year: '',
    weight: '',
    length: '',
    license: '',
    height: '',
    width: '',
    power: '',
    emptyWeight: '',
    gearbox: '',
    fuelType: '',
  });

  const camperTypes = [
    { label: 'Caravans', icon: CaravanIcon },
    { label: 'Motorhomes', icon: MotorhomeIcon },
    { label: 'Box Vans', icon: BoxVanIcon },
    { label: 'Others', icon: OtherIcon },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box p={3} display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4" fontWeight={600} mb={4}>Specification of Camper</Typography>

      <Typography style={styles.label}>Choose Camper Type:</Typography>
      <Box display="flex" gap={2} flexWrap="wrap">
        {camperTypes.map((type) => (
          <Box
            key={type.label}
            onClick={() => setSelectedType(type.label)}
            sx={styles.iconBox(selectedType === type.label)}
          >
            <img src={type.icon} alt={type.label} width={60} height={40} />
            <Typography fontSize={12} mt={0.75}>{type.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <select name="brand" value={form.brand} onChange={handleChange} style={styles.input}>
          <option value="">Select Brand</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
        </select>
        <input name="model" value={form.model} onChange={handleChange} placeholder="Model" style={styles.input} />
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <select name="sleepingPlaces" value={form.sleepingPlaces} onChange={handleChange} style={styles.input}>
          <option value="">Sleeping Places</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <Box display="flex" gap={0.5} flex={1}>
          <input name="day" value={form.day} onChange={handleChange} placeholder="DD" style={styles.input} />
          <input name="month" value={form.month} onChange={handleChange} placeholder="MM" style={styles.input} />
          <input name="year" value={form.year} onChange={handleChange} placeholder="YYYY" style={styles.input} />
        </Box>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <Box sx={styles.pillInputWrapper}>
          <input name="weight" value={form.weight} onChange={handleChange} placeholder="Total Weight" style={styles.pillInput} />
          <Box sx={styles.unitBox}>KG</Box>
        </Box>
        <Box sx={styles.pillInputWrapper}>
          <input name="length" value={form.length} onChange={handleChange} placeholder="Length" style={styles.pillInput} />
          <Box sx={styles.unitBox}>MM</Box>
        </Box>
      </Box>

      <select name="license" value={form.license} onChange={handleChange} style={styles.input}>
        <option value="">Driving License</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <Box display="flex" gap={2} flexWrap="wrap">
        <Box sx={styles.pillInputWrapper}>
          <input name="height" value={form.height} onChange={handleChange} placeholder="Height" style={styles.pillInput} />
          <Box sx={styles.unitBox}>MM</Box>
        </Box>
        <Box sx={styles.pillInputWrapper}>
          <input name="width" value={form.width} onChange={handleChange} placeholder="Width" style={styles.pillInput} />
          <Box sx={styles.unitBox}>MM</Box>
        </Box>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <Box sx={styles.pillInputWrapper}>
          <input name="power" value={form.power} onChange={handleChange} placeholder="Power" style={styles.pillInput} />
          <Box sx={styles.unitBox}>KW</Box>
        </Box>
        <Box sx={styles.pillInputWrapper}>
          <input name="emptyWeight" value={form.emptyWeight} onChange={handleChange} placeholder="Empty Weight" style={styles.pillInput} />
          <Box sx={styles.unitBox}>KG</Box>
        </Box>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <select name="gearbox" value={form.gearbox} onChange={handleChange} style={styles.input}>
          <option value="">Gear Box</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
        <select name="fuelType" value={form.fuelType} onChange={handleChange} style={styles.input}>
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </Box>

  <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Specification;
