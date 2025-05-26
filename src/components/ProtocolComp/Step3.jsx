import React from 'react';
import { Box, Typography } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';

const Step3 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 3
      </Typography>

      <Box sx={{ 
        p: 3, 
        mb: 3, 
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff',
        flex: 1
      }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Vehicle Condition Assessment
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Mileage */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Mileage according to the meter</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>km</span>
              </Box>
            </Box>

            {/* Fuel Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Fuel Tank Level</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>%</span>
              </Box>
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Engine Oil Level */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Engine Oil Level</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>%</span>
              </Box>
            </Box>

            {/* Gas Level */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Gas Level</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>%</span>
              </Box>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Fresh Water Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Fresh Water Tank Level</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>%</span>
              </Box>
            </Box>

            {/* Waste Water Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Waste Water Tank Level</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>%</span>
              </Box>
            </Box>
          </Box>

          {/* Fourth Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Tire Tread */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Tire Tread Depth</label>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>mm</span>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }} /> {/* Empty box for alignment */}
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
        <ActionButtons 
          onSaveDraft={onPrevious} 
          onNext={onNext}
        />
      </Box>
    </Box>
  );
};

export default Step3; 