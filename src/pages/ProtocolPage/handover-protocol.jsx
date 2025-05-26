import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  LinearProgress,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { useTheme } from '@emotion/react';

import Step1 from '../../components/ProtocolComp/Step1';
import Step2 from '../../components/ProtocolComp/Step2';
import Step3 from '../../components/ProtocolComp/Step3';
import Step4 from '../../components/ProtocolComp/Step4';
import Step5 from '../../components/ProtocolComp/Step5';
import Step6 from '../../components/ProtocolComp/Step6';
import Step7 from '../../components/ProtocolComp/Step7';
import Step8 from '../../components/ProtocolComp/Step8';

const sectionConfig = [
  { key: 'Step 1', component: Step1 },
  { key: 'Step 2', component: Step2 },
  { key: 'Step 3', component: Step3 },
  { key: 'Step 4', component: Step4 },
  { key: 'Step 5', component: Step5 },
  { key: 'Step 6', component: Step6 },
  { key: 'Step 7', component: Step7 },
  { key: 'Step 8', component: Step8 },
];

function HandoverProtocol() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('Step 1');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [confirmDialog, setConfirmDialog] = useState({ open: false, targetStep: null });

  const currentStepIndex = sectionConfig.findIndex(section => section.key === activeSection);
  const progress = ((currentStepIndex + 1) / sectionConfig.length) * 100;

  const handleNext = () => {
    const currentIndex = sectionConfig.findIndex(section => section.key === activeSection);
    if (currentIndex < sectionConfig.length - 1) {
      setActiveSection(sectionConfig[currentIndex + 1].key);
    }
  };

  const handlePrevious = () => {
    const currentIndex = sectionConfig.findIndex(section => section.key === activeSection);
    if (currentIndex > 0) {
      setActiveSection(sectionConfig[currentIndex - 1].key);
    }
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex === currentStepIndex) return;

    if (stepIndex < currentStepIndex) {
      setActiveSection(sectionConfig[stepIndex].key);
    } else {
      setConfirmDialog({
        open: true,
        targetStep: stepIndex
      });
    }
  };

  const handleConfirmNavigation = () => {
    setActiveSection(sectionConfig[confirmDialog.targetStep].key);
    setConfirmDialog({ open: false, targetStep: null });
  };

  const handleCloseDialog = () => {
    setConfirmDialog({ open: false, targetStep: null });
  };

  const renderContent = () => {
    const match = sectionConfig.find((section) => section.key === activeSection);
    if (!match) return <Typography>Section not found</Typography>;

    const Component = match.component;
    return (
      <Component
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirstStep={activeSection === 'Step 1'}
        isLastStep={activeSection === 'Step 8'}
      />
    );
  };

  // Split steps into two rows for mobile
  const firstRowSteps = sectionConfig.slice(0, 4);
  const secondRowSteps = sectionConfig.slice(4);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 1, sm: 2 },
        width: { xs: '100%', sm: '90%', md: '85%' },
        mx: 'auto',
      }}
    >
      {/* Header */}
      <Typography 
        variant="h5" 
        fontWeight="bold" 
        align="left" 
        sx={{ 
          mb: 2,
          fontSize: { xs: '1.25rem', sm: '1.5rem' }
        }}
      >
        Handover Protocol
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ width: '100%', mb: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        />
      </Box>

      {/* Layout */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Box
            elevation={3}
            sx={{
              minWidth: 200,
              minHeight: '100vh',
              overflowY: 'auto',
              maxWidth: '220px',
              p: 1,
              display: { xs: 'none', md: 'block' },
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <List dense>
              {sectionConfig.map((section, index) => (
                <ListItemButton
                  key={section.key}
                  selected={activeSection === section.key}
                  onClick={() => handleStepClick(index)}
                  sx={{
                    fontSize: '15px',
                    borderRadius: 1,
                    fontWeight: 900,
                    mb: 1,
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary?.main || '#1976d2',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: theme.palette.primary?.dark || '#1565c0',
                      },
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.primary?.light || '#42a5f5',
                      color: '#fff',
                    },
                  }}
                >
                  <ListItemText primary={section.key} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}

        {/* Main Content Area */}
        <Box sx={{ flex: 1 }}>
          {/* Mobile Steps Navigation */}
          {isMobile && (
            <Box sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
              {/* First Row */}
              <Grid container spacing={1} sx={{ mb: 1, justifyContent: 'center' }}>
                {firstRowSteps.map((section, index) => (
                  <Grid item xs={6} sm={3} key={section.key}>
                    <Paper
                      onClick={() => handleStepClick(index)}
                      elevation={0}
                      sx={{
                        p: { xs: 1, sm: 1.5 },
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: index === currentStepIndex 
                          ? theme.palette.primary.main 
                          : index < currentStepIndex 
                            ? theme.palette.primary.light 
                            : '#f5f5f5',
                        color: index === currentStepIndex ? '#fff' : 'text.primary',
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 2,
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: index === currentStepIndex ? 'bold' : 'normal',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {section.key}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* Second Row */}
              <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                {secondRowSteps.map((section, index) => (
                  <Grid item xs={6} sm={3} key={section.key}>
                    <Paper
                      onClick={() => handleStepClick(index + 4)}
                      elevation={0}
                      sx={{
                        p: { xs: 1, sm: 1.5 },
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: (index + 4) === currentStepIndex 
                          ? theme.palette.primary.main 
                          : (index + 4) < currentStepIndex 
                            ? theme.palette.primary.light 
                            : '#f5f5f5',
                        color: (index + 4) === currentStepIndex ? '#fff' : 'text.primary',
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 2,
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: (index + 4) === currentStepIndex ? 'bold' : 'normal',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {section.key}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Content */}
          <Box
            sx={{
              p: { xs: 1, sm: 2 },
              backgroundColor: '#fff',
              borderRadius: 2,
              minHeight: '500px',
              width: '100%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {renderContent()}
          </Box>
        </Box>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmDialog.open}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Skip to Future Step?</DialogTitle>
        <DialogContent>
          <Typography>
            You're about to skip to a future step. Any unsaved changes in the current step will be lost. Do you want to continue?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmNavigation} color="primary" variant="contained">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default HandoverProtocol;
