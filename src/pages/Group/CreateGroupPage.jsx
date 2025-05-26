import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DetailsStep from '../../components/CreatGroupComp/GroupSteps/DetailsStep';
import SettingsStep from '../../components/CreatGroupComp/GroupSteps/SettingsStep';
import ForumStep from '../../components/CreatGroupComp/GroupSteps/ForumStep';
import PhotoStep from '../../components/CreatGroupComp/GroupSteps/PhotoStep';
import CoverPhotoStep from '../../components/CreatGroupComp/GroupSteps/CoverPhotoStep';
import InvitesStep from '../../components/CreatGroupComp/GroupSteps/InvitesStep';

function CreateGroupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <DetailsStep />;
      case 2:
        return <SettingsStep />;
      case 3:
        return <ForumStep />;
      case 4:
        return <PhotoStep />;
      case 5:
        return <CoverPhotoStep />;
      case 6:
        return <InvitesStep />;
      default:
        return <DetailsStep />;
    }
  };

  const getButtonText = () => {
    if (currentStep === 1) {
      return 'Create Group and Continue';
    } else if (currentStep === 6) {
      return 'Create Group';
    } else {
      return 'Next';
    }
  };

  return (
    <Box sx={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '900px',
      minHeight: '400px',
      borderRadius:2,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <Typography component="h2" align="center" gutterBottom fontWeight={600} mt={2} fontSize={26}>
        Create A New Group
      </Typography>

      <Box sx={{
        margin: '0px 0px 20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:1.5,
        width: '100%',
        backgroundColor: '#F2F4F5',
        padding: '10px 0',
      }}>
        {[1, 2, 3, 4, 5, 6].map((step) => (
          <React.Fragment key={step}>
            <Typography
              variant="body2"
              sx={{
                color: currentStep >= step ? '#ff9800' : 'grey',
                fontWeight: currentStep === step ? 'bold' : 'normal',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
              onClick={() => setCurrentStep(step)}
            >
              {`${step}. ${step === 1 ? 'Details' : step === 2 ? 'Settings' : step === 3 ? 'Forum' : step === 4 ? 'Photo' : step === 5 ? 'Cover Photo' : 'Invites'}`}
            </Typography>
            {step < 6 && (
              <Box sx={{
                width: '20px',
                height: '1px',
                backgroundColor: currentStep > step ? '#ff9800' : 'grey',
                margin: '0 3px',
              }} />
            )}
          </React.Fragment>
        ))}
      </Box>

      <form style={{ width: '100%' }}>
        <Box sx={{
          margin: '0 auto',
          maxWidth: '650px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {renderStep()}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff9800',                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 4,
                  fontSize: 14,
                }}
              >
                Previous Step
              </button>
            )}

            <button 
              type="button" 
              onClick={() => setCurrentStep(currentStep + 1)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 4,
                fontSize: 14,
              }}
              disabled={currentStep === 6} 
            >
              {getButtonText()} 
            </button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default CreateGroupPage; 