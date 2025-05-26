import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Typography,
  Link,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material';
import OtpInput from 'react-otp-input';
import AuthLayout from './AuthLayout';

const Enteropt = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ otp });
  };

  const handleResendCode = () => {
    console.log('Resending code...');
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
            {t('auth.enterVerificationCode')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
            {t('auth.verificationCodeDescription')}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: '40px',
                height: '40px',
                margin: '0 4px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                textAlign: 'center',
                outline: 'none',
                '&:focus': {
                  borderColor: '#FF9B00',
                },
              }}
              containerStyle={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
              }}
              shouldAutoFocus
            />
          </Box>

          <Button
            href='reset-password'
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
            {t('auth.verifyCode')}
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
              {t('auth.didntReceiveCode')}{' '}
              <Link
                component="button"
                type="button"
                onClick={handleResendCode}
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontSize: '14px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {t('auth.resendCode')}
              </Link>
            </Typography>
          </Box>

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

export default Enteropt; 