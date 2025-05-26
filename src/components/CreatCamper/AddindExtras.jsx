import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Modal,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ActionButtons from './ActionsButtons';

const dummyExtras = ['Camping Table', 'Bicycle Rack', 'Grill', 'Bed Linen', 'Coffee Machine'];

const ExtrasForRent = () => {
  const [open, setOpen] = useState(false);
  const [extras, setExtras] = useState([]);
  const [selectedExtra, setSelectedExtra] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('per day');

  const handleAddExtra = () => {
    if (selectedExtra && price) {
      setExtras([...extras, { label: selectedExtra, price, unit }]);
      setSelectedExtra('');
      setPrice('');
      setUnit('per day');
      setOpen(false);
    }
  };

  const handleRemoveExtra = (index) => {
    setExtras(extras.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        List of extras that can be rented additionally
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Add things that can be rented together with your camper at an extra cost. In the equipment area you can add things that are included in the general accommodation fee.
      </Typography>

      {/* Display Added Extras Section */}
      {extras.length > 0 && (
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: 2,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: '#f9f9f9',
          }}
        >
          {extras.map((extra, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: 1.5,
                position: 'relative',
                backgroundColor: '#fff',
              }}
            >
              <IconButton
                onClick={() => handleRemoveExtra(index)}
                size="small"
                sx={{ position: 'absolute', top: 4, right: 4 }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle1" fontWeight={600}>
                {extra.label}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                <Typography variant="body2">€{extra.price}</Typography>
                <Typography variant="body2">| {extra.unit}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Add Extras Button */}
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Extras
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Modal Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Adding Extras</Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ bgcolor: 'primary.main', color: '#fff',borderRadius:"5px" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Select Extra Dropdown */}
          <Box sx={{ mb: 2 }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>Select Extra:</label>
            <select
              value={selectedExtra}
              onChange={(e) => setSelectedExtra(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              <option value="">-- Choose an extra --</option>
              {dummyExtras.map((extra, idx) => (
                <option key={idx} value={extra}>
                  {extra}
                </option>
              ))}
            </select>
          </Box>

          {/* Price and Unit Inputs Row */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '6px' }}>Price (€):</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '6px' }}>Unit:</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              >
                <option value="per day">Per Day</option>
                <option value="per package">Per Package</option>
              </select>
            </Box>
          </Box>

          {/* Add & Cancel Buttons in One Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
        
            <Button
              variant="contained"
              onClick={handleAddExtra}
              sx={{ flex: 1, fontWeight: 'bold', fontSize: '16px' }}
            >
              Add
            </Button>
                <Button
              variant="contained"
              onClick={() => setOpen(false)}
              sx={{ flex: 1, fontWeight: 'bold', fontSize: '16px' }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      
      
  <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>
    
      
    </Box>
  );
};

export default ExtrasForRent;
