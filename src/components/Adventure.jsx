import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CamperCard from './CamperCard';
import cardimg1 from '../assets/cardimg1.jpg';
import cardimg2 from '../assets/cardimg2.jpg';
import cardimg3 from '../assets/cardimg.3.webp';
import cardimg4 from '../assets/cardimg.4.webp';
import cardimg6 from '../assets/cardimg6.jpg';
import cardimg6webp from '../assets/cardimg.6.webp';
import treeimg from '../assets/treeimg.png';

const Adventure = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{
      bgcolor: 'black.main',
      py: 4,
      backgroundImage: `url(${treeimg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Container maxWidth="md">
        <Typography
          align="center"
          sx={{ color: 'primary.main', fontWeight: 700, mb: 3, fontSize: 40, fontFamily: 'Oswald, Sans-serif' }}
        >
          {t('adventure.title')}
        </Typography>
      </Container>
      <Typography
        sx={{
          color: '#fff',
          fontWeight: 400,
          fontSize: { xs: '0.8rem', md: '1.1rem' },
          width: '100%',
          lineHeight: 1.5,
          textAlign: 'center',
          px: { xs: 2, md: 1 },
          mt: 2,
        }}
      >
        {t('adventure.description')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.2, justifyContent: 'center', mt: 4, flexWrap: 'wrap',marginBottom: 33 }}>
        <CamperCard
          images={[cardimg1, cardimg2]}
          price={100}
          location="Eisenach"
          rating={0}
          title="Master Beauty Camper"
          beds={4}
          petsAllowed={true}
          transmission="C1E"
          ownerImg={cardimg3}
          ownerName="John Doe"
        />
        <CamperCard
          images={[cardimg3, cardimg4]}
          price={120}
          location="Berlin"
          rating={4}
          title="Urban Explorer Van"
          beds={2}
          petsAllowed={false}
          transmission="B"
          ownerImg={cardimg4}
          ownerName="Jane Smith"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
        <CamperCard
          images={[cardimg6, cardimg6webp]}
          price={90}
          location="Munich"
          rating={5}
          title="Family Adventure RV"
          beds={6}
          petsAllowed={true}
          transmission="C"
          ownerImg={cardimg6webp}
          ownerName="Max Mustermann"
        />
      </Box>
    </Box>
  );
};

export default Adventure; 