import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CamperdoolyFooterLogo from '../assets/Camperdooly-footer-logo.png';
import PaymentLogos from '../assets/payment-logos.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 1,
        mt: 'auto',
        bgcolor: '#525151',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Row */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3 }}>
          {/* Logo Section */}
          <Box sx={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 ,p:1,py:5}}>
            <Box component="img" src={CamperdoolyFooterLogo} alt={t('common.logo')} sx={{ width: 250, mb: 1 }} />
          </Box>
          {/* Section 2: Newsletter Signup */}
          <Box sx={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 1, pt: 2}}>
            <Typography variant="h6" color="primary" gutterBottom mb={2}>
              {t('footer.newsletter.title')}
            </Typography>
            <Typography fontSize={12} color="#e0e0e0" mb={3}>
              {t('footer.newsletter.description')}
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <input type="email" placeholder={t('footer.newsletter.emailPlaceholder')} style={{ padding: 8, borderRadius: 4, border: 'none', width: '100%' }} />
              <button type="submit" style={{ background: '#FF9B00', color: 'white', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>{t('footer.newsletter.subscribe')}</button>
            </Box>
          </Box>
          {/* Section 3: Contact Info */}
          <Box sx={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 1, pt: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {t('footer.contact.title')}
            </Typography>
            <Typography fontSize={12} color="#e0e0e0">
              {t('footer.contact.description')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
              <EmailIcon sx={{ color: '#FF9B00', mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" color="white" sx={{ fontWeight: 700 }}>{t('footer.contact.reachUs')}</Typography>
                <Typography variant="body2" color="#FF9B00">info@camperdooly.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
              <LocationOnIcon sx={{ color: '#FF9B00', mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" color="white" sx={{ fontWeight: 700 }}>{t('footer.contact.ourLocation')}</Typography>
                <Typography variant="body2" color="#e0e0e0">Rubbsta GmbH<br/>Gartenstr 32 | 45468 Mülheim an der Ruhr</Typography>
              </Box>
            </Box>
          </Box>
          {/* Section 4: Important Links & Payment Logos */}
          <Box sx={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', pt: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom textAlign={"left"}>
              {t('footer.importantLinks.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, mb: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Link component={RouterLink} to="/" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.home')}
                </Link>
                <Link component={RouterLink} to="/camper-registration" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.camperRegistration')}
                </Link>
                <Link component={RouterLink} to="/listings" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.listings')}
                </Link>
                <Link component={RouterLink} to="/news-feed" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.newsFeed')}
                </Link>
                <Link component={RouterLink} to="/shop" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.shop')}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Link component={RouterLink} to="/account" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.account')}
                </Link>
                <Link component={RouterLink} to="/display-rental" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.displayRental')}
                </Link>
                <Link component={RouterLink} to="/members" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.members')}
                </Link>
                <Link component={RouterLink} to="/register" color="#e0e0e0" sx={{ textDecoration: 'none', fontSize: '12px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: '20px' }} /> {t('footer.importantLinks.register')}
                </Link>
              </Box>
            </Box>
            <Box component="img" src={PaymentLogos} alt="Payment Methods" sx={{ width: 250, mt: 2 }} />
          </Box>
        </Box>
        {/* Divider Line */}
        <Box sx={{ width: '100%', borderBottom: '1px solid #e0e0e0', my: 3 }} />
        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="body2" color="#e0e0e0" sx={{ fontSize: '12px' }}>
              {t('footer.bottom.copyright')} |
            </Typography>
            <Link href="#" color="#e0e0e0" sx={{ textDecoration: 'underline', mx: 0.5, fontSize: '12px' }}>{t('footer.bottom.termsOfService')}</Link>
            <Typography variant="body2" color="#e0e0e0" sx={{ fontSize: '12px' }}>|</Typography>
            <Link href="#" color="#e0e0e0" sx={{ textDecoration: 'underline', mx: 0.5, fontSize: '12px' }}>{t('footer.bottom.privacyPolicy')}</Link>
            <Typography variant="body2" color="#e0e0e0" sx={{ fontSize: '12px' }}>|</Typography>
            <Link href="#" color="#e0e0e0" sx={{ textDecoration: 'underline', mx: 0.5, fontSize: '12px' }}>{t('footer.bottom.impressum')}</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="#" color="#e0e0e0" target="_blank"><FacebookIcon fontSize="medium" /></Link>
            <Link href="#" color="#e0e0e0" target="_blank"><InstagramIcon fontSize="medium" /></Link>
            <Link href="#" color="#e0e0e0" target="_blank"><LinkedInIcon fontSize="medium" /></Link>
            <Link href="#" color="#e0e0e0" target="_blank">
              {/* TikTok SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 8.13c-1.6 0-3.09-.52-4.29-1.41v6.98c0 3.44-2.79 6.23-6.23 6.23s-6.23-2.79-6.23-6.23 2.79-6.23 6.23-6.23c.13 0 .26 0 .39.01v2.07c-.13-.01-.26-.02-.39-.02-2.3 0-4.16 1.86-4.16 4.16s1.86 4.16 4.16 4.16 4.16-1.86 4.16-4.16V2.5h2.07c0 2.3 1.86 4.16 4.16 4.16v1.47z" fill="#e0e0e0"/>
              </svg>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 