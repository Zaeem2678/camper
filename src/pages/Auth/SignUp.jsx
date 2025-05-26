import { useState } from 'react';
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
  PersonOutline,
} from '@mui/icons-material';
import AuthLayout from './AuthLayout';
import CustomDialog from '../../components/CustomDialog';  // Adjust this path if needed

const SignUp = () => {
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

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('success'); // 'success' or 'error'
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // Show error dialog
      setDialogType('error');
      setDialogTitle('Error');
      setDialogMessage('Passwords do not match. Please try again.');
      setDialogOpen(true);
      return;
    }

    // Passwords match - success dialog
    setDialogType('success');
    setDialogTitle('Success');
    setDialogMessage('Your account has been created successfully!');
    setDialogOpen(true);

    // You can add further form submission logic here (API call, etc)
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
    },
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
    pointerEvents: 'none',
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
        {/* Logo */}
        <Box sx={{ width: '100%', mb: 4, textAlign: 'center' }}>
          <img
            src="https://camperdooly.com/wp-content/uploads/2025/01/Camperdooly3.png"
            alt="Logo"
            style={{ width: '100%', maxWidth: '320px' }}
          />
        </Box>

        {/* Heading & Sign In link */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Create Account
          </Typography>
          <Typography variant="body2">
            <Link href="/signin" sx={{ textDecoration: 'none', color: '#888' }}>
              Sign In
            </Link>
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          {/* Email */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <EmailOutlined style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Box>

          {/* Password */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <LockOutlined style={iconStyle} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
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
              {showPassword ? (
                <VisibilityOff sx={{ fontSize: '18px' }} />
              ) : (
                <Visibility sx={{ fontSize: '18px' }} />
              )}
            </IconButton>
          </Box>

          {/* Confirm Password */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <LockOutlined style={iconStyle} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={inputStyle}
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
              {showConfirmPassword ? (
                <VisibilityOff sx={{ fontSize: '18px' }} />
              ) : (
                <Visibility sx={{ fontSize: '18px' }} />
              )}
            </IconButton>
          </Box>

          {/* Nickname */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Box>

          {/* First Name */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </Box>

          {/* Last Name */}
          <Box sx={{ mb: 2, position: 'relative' }}>
            <PersonOutline style={iconStyle} />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </Box>

          {/* Agree to Terms */}
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
                  I agree to{' '}
                  <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
          </Box>

          {/* Submit Button */}
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
            Create Account
          </Button>
        </Box>

        {/* Custom Dialog for success/error */}
        <CustomDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title={dialogTitle}
          message={dialogMessage}
          type={dialogType}
        />
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
