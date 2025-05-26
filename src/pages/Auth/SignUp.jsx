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
  useTheme,
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
  PersonOutline
} from '@mui/icons-material';
import AuthLayout from './AuthLayout';

const SignUp = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
            {t('auth.createAccount')}
          </Typography>
          <Typography variant="body2">
            <Link href="/signin" sx={{ textDecoration: 'none', color: '#888' }}>
              {t('auth.signIn')}
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
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
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
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
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

          <Box sx={{ mb: 2, position: 'relative' }}>
            <LockOutlined style={iconStyle} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder={t('auth.confirmPasswordPlaceholder')}
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              sx={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.palette.text.secondary,
              }}
            >
              {showConfirmPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
            </IconButton>
          </Box>

          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="nickname"
              placeholder={t('auth.nicknamePlaceholder')}
              value={formData.nickname}
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
          </Box>

          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="firstName"
              placeholder={t('auth.firstNamePlaceholder')}
              value={formData.firstName}
              onChange={handleChange}
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
            />
          </Box>

          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="lastName"
              placeholder={t('auth.lastNamePlaceholder')}
              value={formData.lastName}
              onChange={handleChange}
              style={{
                ...inputStyle,
                '::placeholder': {
                  fontSize: '13px',
                  color: '#888'
                }
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  sx={{
                    color: '#888',
                    borderRadius: 2,
                    fontSize: '12px',
                    '&.Mui-checked': {
                      color: theme.palette.primary.main,
                      borderRadius: 2,
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: '#888', fontSize: '14px' }}>
                  {t('auth.agreeToTerms')}{' '}
                  <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    {t('common.termsAndConditions')}
                  </Link>
                  {' and '}
                  <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    {t('common.privacyPolicy')}
                  </Link>
                </Typography>
              }
            />
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
            {t('auth.createAccount')}
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignUp; 