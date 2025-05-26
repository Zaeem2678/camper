import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView'; // Grid icon
import ListIcon from '@mui/icons-material/List'; // Corrected List icon
import MemberProfileCard from '../../components/ConnectionComponents/MemberProfileCard';
import ConnectionCard from '../../components/ConnectionComponents/ConnectionCard';

export default function ConnectionPage() {
  const [activeTab, setActiveTab] = useState('connections');
  const [sortBy, setSortBy] = useState('recentlyActive');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  // Mock data - replace with actual data from your API
  const mockConnections = [
    {
      id: 1,
      name: 'John Doe',
      avatar: null,
      joinedDate: 'Feb 2023',
      activeTime: '2 minutes ago',
      followers: 10
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: null,
      joinedDate: 'Jan 2024',
      activeTime: '1 hour ago',
      followers: 5
    },
  ];

  const mockRequests = [
     {
      id: 3,
      name: 'Peter Jones',
      avatar: null,
    },
    {
      id: 4,
      name: 'Mary Brown',
      avatar: null,
    },
  ];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleViewModeChange = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  return (
    <Box sx={{
      width: { xs: '100%', sm: '95%', md: '90%' },
      mb: 1,
      px: { xs: 2, sm: 3, md: 1 },
      py: 2,
    }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 2 }}>
          <Button
            sx={{
              minWidth: 90,
              fontSize: 14,
              py: 0.5,
              color: activeTab === 'connections' ? '#000' : '#ccc',
              backgroundColor: activeTab === 'connections' ? '#f0f2f5' : 'transparent',
              '&:hover': {
                backgroundColor: "#385DFF",
                color: '#fff',
              },
            }}
            onClick={() => handleTabChange('connections')}
          >
            My Connections
          </Button>
          <Button
            sx={{
              minWidth: 90,
              fontSize: 14,
              py: 0.5,
              color: activeTab === 'connections' ? '#000' : '#ccc',
              backgroundColor: activeTab === 'connections' ? '#f0f2f5' : 'transparent',
              '&:hover': {
                backgroundColor: "#385DFF",
                color: '#fff',
              },
            }}
            onClick={() => handleTabChange('requests')}
          >
            Requests
          </Button>
        </Box>

        {activeTab === 'connections' && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">
              {mockConnections.length} Connection{mockConnections.length !== 1 ? 's' : ''}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Select
                value={sortBy}
                onChange={handleSortByChange}
                size="small"
                sx={{ fontSize: 12, '.MuiOutlinedInput-notchedOutline': { border: '1px solid #ccc' } }}
              >
                <MenuItem value="recentlyActive">Recently Active</MenuItem>
                <MenuItem value="newestMember">Newest Member</MenuItem>
                <MenuItem value="alphabetical">Alphabetical</MenuItem>
              </Select>
              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={handleViewModeChange}
                aria-label="view mode"
                size="small"
              >
                <ToggleButton value="grid" aria-label="grid view">
                  <GridViewIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="list" aria-label="list view">
                  <ListIcon fontSize="small" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        )}

        <Box>
          {activeTab === 'connections' ? (
            mockConnections.map((member) => (
              <MemberProfileCard key={member.id} member={member} />
            ))
          ) : (
            <>
              <Typography  sx={{ mb: 3,fontSize:15,fontWeight:600 }}>
                Connection Requests
              </Typography>
              {mockRequests.map((user) => (
                <ConnectionCard key={user.id} user={user} />
              ))}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
        