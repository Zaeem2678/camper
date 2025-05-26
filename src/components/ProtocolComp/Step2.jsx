import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ActionButtons from '../CreatCamper/ActionsButtons';

const Step2 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 2
      </Typography>

      <Box sx={{ 
        p: 3, 
        mb: 3, 
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff',
        flex: 1
      }}>
        {/* Vehicle Pickup */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Vehicle Pickup
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1, position: 'relative' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Date</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 35px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  />
                  <CalendarTodayIcon 
                    style={{ 
                      position: 'absolute', 
                      left: '10px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#666',
                      fontSize: '18px'
                    }} 
                  />
                </div>
              </Box>
              <Box sx={{ flex: 1, position: 'relative' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Time</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="HH:MM"
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 35px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  />
                  <AccessTimeIcon 
                    style={{ 
                      position: 'absolute', 
                      left: '10px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#666',
                      fontSize: '18px'
                    }} 
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Vehicle Return */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Vehicle Return
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1, position: 'relative' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Date</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 35px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  />
                  <CalendarTodayIcon 
                    style={{ 
                      position: 'absolute', 
                      left: '10px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#666',
                      fontSize: '18px'
                    }} 
                  />
                </div>
              </Box>
              <Box sx={{ flex: 1, position: 'relative' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Time</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="HH:MM"
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 35px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                  />
                  <AccessTimeIcon 
                    style={{ 
                      position: 'absolute', 
                      left: '10px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#666',
                      fontSize: '18px'
                    }} 
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

        {/* Personal Information */}
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Personal Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>First Name</label>
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
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Last Name</label>
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

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Country</label>
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
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>City</label>
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

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>State</label>
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
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Zip Code</label>
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

            <Box>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Date of Birth</label>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Day"
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
                  <input
                    type="text"
                    placeholder="Month"
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
                  <input
                    type="text"
                    placeholder="Year"
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

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Identity Card Number</label>
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
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Driving License Number</label>
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

            <Box>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Date of Issue</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 35px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <CalendarTodayIcon 
                  style={{ 
                    position: 'absolute', 
                    left: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: '#666',
                    fontSize: '18px'
                  }} 
                />
              </div>
            </Box>
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

export default Step2; 