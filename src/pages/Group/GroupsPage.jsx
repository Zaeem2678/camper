import React, { useState } from 'react';
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Infocomp from '../../components/AccountSettings/Infocomp';

const GroupsPage = () => {
  const [activeSection, setActiveSection] = useState('myGroups');
  const [sortValue, setSortValue] = useState('Recently Active');

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'myGroups':
        return (
          <Box>
            {/* <Typography gutterBottom sx={{ my: 2, fontSize: 18,mb:4 }}>
              My Groups
            </Typography> */}
            <Infocomp text="You have not joined any groups yet." />
          </Box>
        );
      case 'invitations':
        return (
          <Box>
            <Typography gutterBottom sx={{ my: 2, fontSize: 18,mb:4 }}>
              Group Invitations
            </Typography>
            <Infocomp text="No pending invitations" />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, mt: 2, px: 1 }}>
      

      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <Button
          variant="text"
          onClick={() => setActiveSection('myGroups')}
          sx={{
            minWidth: 90,
            fontSize: 13,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: activeSection === 'myGroups' ? '#000' : '#ccc',
            backgroundColor: activeSection === 'myGroups' ? '#f0f2f5' : 'transparent',
            '&:hover': {
              backgroundColor: "#385DFF",
              color: '#fff',
            },
          }}
        >
          My Groups
        </Button>
        <Button
          variant="text"
          onClick={() => setActiveSection('invitations')}
          sx={{
            minWidth: 90,
            fontSize: 13,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: activeSection === 'invitations' ? '#000' : '#ccc',
            backgroundColor: activeSection === 'invitations' ? '#f0f2f5' : 'transparent',
            '&:hover': {
              backgroundColor: "#385DFF",
              color: '#fff',
            },
          }}
        >
          Invitations
        </Button>
      </Box>

      {/* New row for Group Count, Sort, and View options */}
      {activeSection === 'myGroups' && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography>0 Groups</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FormControl variant="outlined" size="small">
              <InputLabel>Sort</InputLabel>
              <Select
                value={sortValue}
                onChange={handleSortChange}
                label="Sort"
              >
                <MenuItem value="Recently Active">Recently Active</MenuItem>
                <MenuItem value="Most Member">Most Member</MenuItem>
                <MenuItem value="Newly Created">Newly Created</MenuItem>
                <MenuItem value="Alphabetical">Alphabetical</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      )}

      {renderSectionContent()}
    </Box>
  );
};

export default GroupsPage; 