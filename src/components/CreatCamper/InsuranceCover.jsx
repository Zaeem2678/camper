import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,

  Button,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ActionButtons from './ActionsButtons';

const renderEuroInput = (label, value, onChange) => (
  <Box>
    <Typography fontSize={14} mb={1}>{label}</Typography>
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
  </Box>
);

const InsuranceCover = () => {
  const [selectedOption, setSelectedOption] = useState('requires');
  const [volkasko, setVolkasko] = useState('');
  const [partial, setPartial] = useState('');
  const [punctureHotline, setPunctureHotline] = useState('');
  const [claimsHotline, setClaimsHotline] = useState('');
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="bold">Insurance Cover</Typography>
      <Typography sx={{ color: '#555', fontSize: 14 }}>
        All campers on our site must have comprehensive insurance cover for rental use
      </Typography>

      {/* Selection Options */}
      <Typography variant="subtitle2" fontWeight="500" mt={0.5}>
        Do you need insurance cover?
      </Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Paper
          elevation={selectedOption === 'requires' ? 6 : 1}
          onClick={() => setSelectedOption('requires')}
          sx={{
            p: 3,
            borderRadius: 2,
            flex: 1,
            cursor: 'pointer',
            border: selectedOption === 'requires' ? '2px solid #FFA500' : '1px solid #ccc',
            backgroundColor: selectedOption === 'requires' ? '#FFF8E1' : '#fff',
          }}
        >
          <Typography fontSize={14} fontWeight="bold" textAlign="center" mb={1}>
            My camper requires insurance cover
          </Typography>
          <Typography fontSize={12} color="text.secondary" textAlign="center">
            I have to use the insurance cover of the PaulCamper promise for rental use
          </Typography>
        </Paper>

        <Paper
          elevation={selectedOption === 'already' ? 6 : 1}
          onClick={() => setSelectedOption('already')}
          sx={{
            p: 3,
            borderRadius: 2,
            flex: 1,
            cursor: 'pointer',
            border: selectedOption === 'already' ? '2px solid #FFA500' : '1px solid #ccc',
            backgroundColor: selectedOption === 'already' ? '#FFF8E1' : '#fff',
          }}
        >
          <Typography fontSize={14} fontWeight="600" textAlign="center" mb={1}>
            My camper is already insured
          </Typography>
          <Typography fontSize={12} color="text.secondary" textAlign="center">
            My insurance cover already includes rental use
          </Typography>
        </Paper>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* Rental Info Section */}
      <Typography fontSize={24} fontWeight="bold">
        Tell us a little bit about your rental insurance cover
      </Typography>
      <Typography sx={{ color: '#555', mb: 2, fontSize: 14 }}>
        Please check if your insurance cover includes comprehensive insurance coverage during rental.
      </Typography>

      {/* Euro Inputs */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        {renderEuroInput("Volkasko insurance with excess", volkasko, (e) => setVolkasko(e.target.value))}
        {renderEuroInput("Partial insurance with excess", partial, (e) => setPartial(e.target.value))}
      </Box>

      {/* Upload Sections */}
      {[
        'Uploading vehicle license',
        'Upload insurance policy',
        'Uploading privacy policy',
        'Upload breakdown protection letter',
      ].map((label, i) => (
        <Box key={i}>
          <Typography fontWeight="500" mt={3} mb={1} color="grey">
            {label}
          </Typography>
          <Box
            sx={{
              border: '2px dashed #FFA500',
              borderRadius: 2,
              p: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              color: '#777',
              cursor: 'pointer',
              backgroundColor: '#fafafa',
              minHeight: 250,
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 30, mb: 1, color: '#FFA500' }} />
            <Typography>
              Upload or Drag & Drop (max 10 MB)<br />
              Only DOCX, DOC & PDF only allowed
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Hotline Inputs */}
      <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
        {[{
          label: 'Puncture protection hotline',
          value: punctureHotline,
          onChange: setPunctureHotline
        }, {
          label: 'Claims hotline of your insurance',
          value: claimsHotline,
          onChange: setClaimsHotline
        }].map((input, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Typography mb={1} fontSize={14}>{input.label}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#eee',
                  padding: '10px 14px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#333',
                  borderRight: '1px solid #ccc',
                }}
              >
                +49
              </Box>
              <input
                type="tel"
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
   <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default InsuranceCover;
