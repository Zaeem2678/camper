import { Box, Container } from '@mui/material';

const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: '#ffffff',
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          pt: 10,
          pb: 10,
          backgroundColor: '#fff',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default AuthLayout; 