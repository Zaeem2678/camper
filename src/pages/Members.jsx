import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import MembersHeader from '../components/MembersHeader';
import MembersSearch from '../components/MembersSearch';
import MembersFilter from '../components/MembersFilter';
import MembersGrid from '../components/MembersGrid';

const Members = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ pt: 0, background: '#fafbfc', minHeight: '100vh' }}>
      <Box sx={{ 
        maxWidth: 1200, 
        mx: 'auto', 
        pt: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        {/* Row 1: Members heading (left) and search bar (right) in one row */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          mb: { xs: 3, sm: 4, md: 5 },
          gap: { xs: 2, sm: 0 }
        }}>
          <Typography sx={{ 
            fontWeight: 500, 
            fontSize: { xs: 20, sm: 22, md: 24 }, 
            color: '#1a2233' 
          }}>
            {t('members.title')}
          </Typography>
          <MembersSearch />
        </Box>
        {/* Row 2: All Members header left-aligned */}
        <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
          <MembersHeader />
        </Box>
        {/* Row 3: Filter right-aligned */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          mb: { xs: 2, sm: 2.5, md: 3 } 
        }}>
          <MembersFilter />
        </Box>
        <MembersGrid />
      </Box>
    </Box>
  );
};

export default Members; 