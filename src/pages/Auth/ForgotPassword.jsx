import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Typography,
  Link,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import { EmailOutlined, LanguageOutlined } from '@mui/icons-material';
import AuthLayout from './AuthLayout';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
    // Navigate to OTP page after successful submission
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
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

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.palette.text.secondary,
    width: '18px',
    height: '18px',
    zIndex: 1,
    pointerEvents: 'none'
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
            {t('auth.forgotPasswordTitle')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
            {t('auth.forgotPasswordDescription')}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box sx={{ mb: 3, position: 'relative' }}>
            <EmailOutlined style={iconStyle} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('auth.emailPlaceholder')}
              required
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
            />
          </Box>

          <Button
            href='enter-otp'
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
            {t('auth.requestResetLink')}
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Link href="/signin" sx={{ textDecoration: 'none', color: theme.palette.text.secondary, fontSize: '14px' }}>
              {t('common.backToSignIn')}
            </Link>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center',mb:10 }}>
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

          <Box sx={{ 
            mt: 3, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5
          }}>
            <LanguageOutlined sx={{ 
              color: theme.palette.text.primary,
              fontSize: 25
            }} />
            <Select
              value={language}
              onChange={handleLanguageChange}
              size="small"
              sx={{
                width: '180px',
                '& .MuiSelect-select': {
                  py: 1,
                  fontSize: '14px',
                },
              }}
            >
              <MenuItem value="en" sx={{ fontSize: '14px' }}>English (United States)</MenuItem>
              <MenuItem value="es" sx={{ fontSize: '14px' }}>Español</MenuItem>
              <MenuItem value="fr" sx={{ fontSize: '14px' }}>Français</MenuItem>
              <MenuItem value="de" sx={{ fontSize: '14px' }}>Deutsch</MenuItem>
            </Select>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#f5f5f5',
                color: '#333',
                fontSize: '14px',
                py: 1,
                px: 2,
                '&:hover': {
                  bgcolor: '#e3f2fd',
                },
                boxShadow: 'none',
                borderRadius: 2,
              }}
            >
              Change
            </Button>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default ForgotPassword; 