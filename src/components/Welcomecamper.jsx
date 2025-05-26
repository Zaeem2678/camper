import {
    Box,
    Typography,
    Container,
    List,
    ListItem,
  } from '@mui/material';
  import { useTranslation } from 'react-i18next';
  import CheckIcon from '@mui/icons-material/Check';
  import background from '../assets/treeimg2.png';
  import camperImage from '../assets/camper-family.png';
  
  const features = [
    {
      key: 'exchange',
      title: 'title',
      description: 'description',
    },
    {
      key: 'rentals',
      title: 'title',
      description: 'description',
    },
    {
      key: 'community',
      title: 'title',
      description: 'description',
    },
    {
      key: 'tools',
      title: 'title',
      description: 'description',
    },
    {
      key: 'route',
      title: 'title',
      description: 'description',
    },
  ];
  
  export default function WelcomeCamper() {
    const { t } = useTranslation();
  
    return (
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 6, md: 8 },
          color: 'text.primary',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="xl">
          <Typography align="center" sx={{ fontWeight: 600, fontSize: 25 }}>
            {t('welcome.title')}
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="primary.main"
            sx={{ fontWeight: 600, mt: 1 }}
          >
            {t('welcome.subtitle')}
          </Typography>
          <Typography align="center" sx={{ mt: 2, mb: 3.5, fontSize: 18 }}>
            {t('welcome.description')}
          </Typography>
  
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={6}>
            {/* Left: Features */}
            <Box flex={1}>
              <Typography
                color="primary.main"
                sx={{ fontWeight: 600, mb: 2, fontSize: 33 }}
              >
                {t('welcome.whatAwaitsYou')}
              </Typography>
  
              <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {features.map((item) => (
                  <ListItem
                    key={item.key}
                    disableGutters
                    sx={{
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 1.2,
                      px: 0,
                      py: 0.5,
                    }}
                  >
                    <CheckIcon sx={{ color: 'primary.main', mt: '3px' }} />
                    <Typography variant="body1">
                      <Box component="span" sx={{ fontWeight: 'bold' }}>
                        {t(`welcome.features.${item.key}.${item.title}`)}
                      </Box>{' '}
                      – {t(`welcome.features.${item.key}.${item.description}`)}
                    </Typography>
                  </ListItem>
                ))}
              </List>
  
              <Typography sx={{ mt: 2 }}>
                {t('welcome.joinCommunity')}
              </Typography>
            </Box>
  
            {/* Right: Image */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              zIndex={2}
            >
              <Box
                sx={{
                  width: { xs: 250, sm: 300, md: 600 },
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  padding: 2,
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src={camperImage}
                  alt="Camper Family"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
  