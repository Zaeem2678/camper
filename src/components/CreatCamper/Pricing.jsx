import React, { useState } from 'react';
import { Box, Typography, Button, } from '@mui/material';
import ActionButtons from './ActionsButtons';

const Pricing = () => {
  const [minDays, setMinDays] = useState(9);
  const [standardPrice, setStandardPrice] = useState(5);
  const [cleaningFee, setCleaningFee] = useState(4);
  const [deposit, setDeposit] = useState(5);

  const handleMinDaysChange = (delta) => {
    setMinDays((prev) => Math.max(1, prev + delta));
  };

  const renderEuroInput = (value, onChange) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        width: '280px',
        
      }}
    >
      <input
        type="number"
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          border: 'none',
          padding: '10px',
          fontSize: '16px',
          outline: 'none',
          borderRight: '1px solid #ccc',
        }}
      />
      <Box
        sx={{
          backgroundColor: '#eee',
          padding: '10px 14px',
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#444',
        }}
      >
        €
      </Box>
    </Box>
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom marginBottom={3}>
        Pricing
      </Typography>

      {/* Minimum number of days */}
    
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between", gap: 2, mb: 1 }}>
          <Typography variant="h6"  fontWeight={500}  mb={1}>
        Minimum number of days
      </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px #ccc',
          }}
        >
          <button
            onClick={() => handleMinDaysChange(-1)}
            style={{
              background: '#FFA500',
              color: '#fff',
              border: 'none',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            -
          </button>
          <input
            type="text"
            value={minDays}
            readOnly
            style={{
              width: '60px',
              height: '40px',
              border: 'none',
              textAlign: 'center',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <button
            onClick={() => handleMinDaysChange(1)}
            style={{
              background: '#FFA500',
              color: '#fff',
              border: 'none',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </Box>
      </Box>
      <Typography sx={{ color: '#555', fontSize: '14px', mb: 3,width:"60%",fontWeight:400, }}>
        Minimum number of days per booking. You can specify a different number for certain dates in your calendar after
        you have completed this ad.
      </Typography>

      {/* Standard Price */}
      <Typography  fontWeight={600}  mb={1}>
        Standard price
      </Typography>
      {renderEuroInput(standardPrice, (e) => setStandardPrice(Number(e.target.value)))}
      <Typography sx={{ color: '#555', fontSize: '14px', mt: 1, mb: 3 }}>
        This is the standard price per day. You can set different prices for certain periods in your calendar after you
        have finished your ad.
      </Typography>

      {/* Cleaning Fee */}
      <Typography  fontWeight={600}  mb={1}>
        Cleaning fee
      </Typography>
      {renderEuroInput(cleaningFee, (e) => setCleaningFee(Number(e.target.value)))}
      <Typography sx={{ color: '#555', fontSize: '14px', mt: 1, mb: 3 }}>
        This is the amount you charge for cleaning and reloading your camper. If you do not want to charge a cleaning
        fee, you can enter €0.
      </Typography>

      {/* Deposit */}
      <Typography fontWeight="bold" mb={1}>
        Deposit
      </Typography>
      {renderEuroInput(deposit, (e) => setDeposit(Number(e.target.value)))}
      <Typography sx={{ color: '#555', fontSize: '14px', mt: 1, mb: 7 }}>
        This is the deposit that rental certus have to be paid for your camper.
      </Typography>

      {/* Buttons */}
    <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Pricing;
