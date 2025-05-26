import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';

const Step5 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 5
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
          Vehicle Options and Features
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Stove and Refrigerator */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Stove</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Refrigerator */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Refrigerator with freezer compartment</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Vehicle Option */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Vehicle Option</Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">Select Option</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Additional Features */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>Water connection</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">Select Option</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>Hot water</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">Select Option</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>4-way bike rack</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">Select Option</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }} />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>My camper is not suitable for the winter</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">Select Option</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }} />
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

export default Step5; 