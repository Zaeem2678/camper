import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Typography,
  Link,
  useTheme,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff, LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const ResetPassword = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClickShowPassword = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch error
      return;
    }
    // Handle password reset logic here
    navigate('/signin');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    paddingLeft: '36px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    '&::placeholder': {
      fontSize: '13px',
      color: '#888',
    }
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '320px',
          margin: '0 auto',
        }}
      >
        <Box sx={{ width: '100%', mb: 4, textAlign: 'center' }}>
          <img
            src="https://camperdooly.com/wp-content/uploads/2025/01/Camperdooly3.png"
            alt={t('common.logo')}
            style={{ width: '100%', maxWidth: '320px' }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {t('auth.resetPassword')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
            {t('auth.forgotPasswordDescription')}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box sx={{ mb: 3, position: 'relative' }}>
            <LockOutlined sx={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.palette.text.secondary,
              width: '18px',
              height: '18px',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            <input
              type={showPassword.password ? 'text' : 'password'}
              name="password"
              placeholder={t('auth.newPasswordPlaceholder')}
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
            />
            <IconButton
              onClick={() => handleClickShowPassword('password')}
              sx={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.text.secondary,
              }}
            >
              {showPassword.password ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
            </IconButton>
          </Box>

          <Box sx={{ mb: 3, position: 'relative' }}>
            <LockOutlined sx={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.palette.text.secondary,
              width: '18px',
              height: '18px',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            <input
              type={showPassword.confirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder={t('auth.confirmNewPasswordPlaceholder')}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
            />
            <IconButton
              onClick={() => handleClickShowPassword('confirmPassword')}
              sx={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.text.secondary,
              }}
            >
              {showPassword.confirmPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
            </IconButton>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 0.9,
              fontSize: '14px',
              borderRadius: 2,
              mb: 2,
            }}
          >
            {t('auth.resetPassword')}
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Link href="/signin" sx={{ textDecoration: 'none', color: theme.palette.text.secondary, fontSize: '14px' }}>
              {t('common.backToSignIn')}
            </Link>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center', mb: 10 }}>
            <Typography variant="body2" color="text.secondary">
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                {t('common.termsAndConditions')}
              </Link>
              {' and '}
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                {t('common.privacyPolicy')}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default ResetPassword; 