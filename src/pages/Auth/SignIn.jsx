import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
  LanguageOutlined
} from '@mui/icons-material';
import AuthLayout from './AuthLayout';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Form data:', formData);

    // Set success message in localStorage before navigation
    localStorage.setItem('loginSuccessMessage', 'Login successful!');

    // Navigate to homepage
    navigate('/');
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
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {t('auth.signIn')}
          </Typography>
          <Typography variant="body2">
            <Link href="/signup" sx={{ textDecoration: 'none', color: theme.palette.text.secondary }}>
              {t('auth.createAccount')}
            </Link>
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box sx={{ mb: 2, position: 'relative' }}>
            <EmailOutlined style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder={t('auth.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Box>

          <Box sx={{ mb: 2, position: 'relative' }}>
            <LockOutlined style={iconStyle} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              sx={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.text.secondary,
              }}
            >
              {showPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  sx={{
                    color: theme.palette.text.secondary,
                    borderRadius: 2,
                    fontSize: '12px',
                    '&.Mui-checked': {
                      color: theme.palette.primary.main,
                      borderRadius: 2,
                    },
                  }}
                />
              }
              label={t('auth.rememberMe')}
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '14px',
                  color: theme.palette.text.secondary,
                }
              }}
            />
            <Link href="/forgot-password" sx={{ textDecoration: 'none', color: theme.palette.text.secondary, fontSize: '14px' }}>
              {t('auth.forgotPassword')}
            </Link>
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
            }}
          >
            {t('auth.login')}
          </Button>

          <Box sx={{ mt: 3, textAlign: 'center', mb: 12 }}>
            <Typography variant="body2" color="#888">
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

export default SignIn;
