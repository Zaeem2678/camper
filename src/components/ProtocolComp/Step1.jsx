import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const Step1 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Step 1
      </Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
        Please fill out two copies for tenant and landlord
      </Typography>

      <Box sx={{ 
        p: 3, 
        mb: 3, 
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff'
      }}>
        {/* Booking Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Booking Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Booking Number</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Vehicle Identification Number</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

        {/* Tenant Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Tenant Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Name</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Email</label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Address</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Telephone</label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

        {/* Landlord Information */}
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Landlord Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Name</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Email</label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Address</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Telephone</label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'flex-end' }}>
        {!isFirstStep && (
          <Button
            variant="outlined"
            onClick={onPrevious}
            sx={{ minWidth: '100px' }}
          >
            Previous
          </Button>
        )}
        <Button
          variant="contained"
          onClick={onNext}
          sx={{ minWidth: '100px' }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Step1; 