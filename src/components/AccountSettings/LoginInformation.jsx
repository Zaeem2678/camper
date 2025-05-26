import React, { useState } from 'react';
import { Box, Typography, Paper, Alert, IconButton, Button, InputAdornment } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import Infocomp from './Infocomp';
const inputStyle = {
  width: '100%',
  padding: '15px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem',
  marginTop: '1px',
  marginBottom: '20px',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle = {
  fontWeight: 500,
  fontSize: '0.9rem',
  marginBottom: '1px',
  display: 'block',
};

const LoginInformation = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // Example email, replace with actual user email from props or context
  const email = 'sudotahirsaeed@gmail.com';

  return (
    <Box sx={{ p: 4, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        {t('account.loginInformation.title')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <label style={labelStyle} htmlFor="account-email">
          Account Email
        </label>
        <input
          id="account-email"
          type="email"
          value={email}
          disabled
          style={{ ...inputStyle, background: '#f5f5f5', color: '#888' }}
        />
        <Infocomp text="Leave password fields blank for no change" />
        
        <label style={labelStyle} htmlFor="new-password">
          Add Your New Password
        </label>
        <Box sx={{ position: 'relative',top:"-2px" }}>
          <input
            id="new-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
            autoComplete="new-password"
          />
          <IconButton
            onClick={() => setShowPassword(show => !show)}
            sx={{ position: 'absolute', right: 8, top: '40%', transform: 'translateY(-50%)' }}
            tabIndex={-1}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>
        <label style={labelStyle} htmlFor="repeat-password">
          Repeat Your New Password
        </label>
        <Box sx={{ position: 'relative',top:"-2px" }}>
          <input
            id="repeat-password"
            type={showRepeatPassword ? 'text' : 'password'}
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            style={inputStyle}
            autoComplete="new-password"
          />
          <IconButton
            onClick={() => setShowRepeatPassword(show => !show)}
            sx={{ position: 'absolute', right: 8, top: '40%', transform: 'translateY(-50%)' }}
            tabIndex={-1}
          >
            {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            alignSelf: 'flex-start',
            bgcolor: '#ffa600',
            color: '#fff',
            fontSize:"14px",
            padding:"8px 22px",
            fontWeight: 600,
            mt: 1,
            '&:hover': { bgcolor: '#ff8800' },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default LoginInformation; 