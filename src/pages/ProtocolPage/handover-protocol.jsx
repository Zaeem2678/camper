import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 0.5,
        width: { xs: '100%', sm: '90%', md: '90%' },
      }}
    >
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" align="left" sx={{ mb: 3 }}>
        Handover Protocol
      </Typography>

      {/* Layout */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Sidebar */}
        <Box
          elevation={3}
          sx={{
            minWidth: 200,
            minHeight: '100vh',
            overflowY: 'auto',
            maxWidth: '220px',
            p: 1,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <List dense>
            {sectionConfig.map((section) => (
              <ListItemButton
                key={section.key}
                selected={activeSection === section.key}
                onClick={() => setActiveSection(section.key)}
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

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 1, sm: 2 },
            backgroundColor: '#fff',
            borderRadius: 2,
            minHeight: '500px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}

export default HandoverProtocol;
