import React, { useState } from 'react';
import { Box, Typography, Button, Paper, } from '@mui/material';
import { CheckCircle, Info, Warning } from '@mui/icons-material';
import ActionButtons from './ActionsButtons';

const policies = [
  {
    id: 'mild',
    label: 'Mild',
    icon: <CheckCircle color="success" />,
    description: 'Low cancellation fees for tenants:innen. A good chance to get more bookings. If tenants: cancel, you keep 5-15% for your effort.',
  },
  {
    id: 'moderate',
    label: 'Moderate',
    icon: <Info color="primary" />,
    description: 'Fine tiered fee system. You will keep 5-55 % if tenants: cancel. However, your chances of booking can decrease.',
  },
  {
    id: 'strict',
    label: 'Strict',
    icon: <Warning color="error" />,
    description: 'High cancellation fees for tenants:inside. You will keep 60-80% of the rental price, depending on when they cancel the booking.',
  },
];

const CancellationPolicy = () => {
  const [selected, setSelected] = useState('mild');
  

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Typography variant="h5" fontWeight="bold" marginBottom={3} gutterBottom>
        Cancellation policy
      </Typography>

      <Typography sx={{ mb: 3, color: '#555',fontSize:16 }}>
        Choose a standard cancellation condition for your ad. You can later set different cancellation conditions in
        your calendar for different dates.{' '}
        <span style={{ color: '#FFA500', cursor: 'pointer', textDecoration: 'underline' }}>Learn more</span>
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
        {policies.map((policy) => (
          <Paper
            key={policy.id}
            onClick={() => setSelected(policy.id)}
            elevation={selected === policy.id ? 6 : 1}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 2,
              cursor: 'pointer',
              border: selected === policy.id ? '2px solid #FFA500' : '1px solid #ccc',
              backgroundColor: selected === policy.id ? '#FFF8E1' : '#fff',
              transition: '0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {policy.icon}
            <Typography variant="h6" fontWeight="bold" >
              {policy.label}
            </Typography>
            <Typography sx={{ color: '#666', fontSize: '14px' ,textAlign:"center"}}>{policy.description}</Typography>
          </Paper>
        ))}
      </Box>

   <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default CancellationPolicy;
