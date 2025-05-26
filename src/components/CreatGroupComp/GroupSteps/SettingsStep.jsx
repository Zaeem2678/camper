import React from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Divider } from '@mui/material';

const permissionOptions = [
  {
    title: 'Activity Feeds',
    question: 'Which members of this group are allowed to post into the activity feed?',
    name: 'activity-feeds',
  },
  {
    title: 'Group Photos',
    question: 'Which members of this group are allowed to upload photos?',
    name: 'group-photos',
  },
  {
    title: 'Group Albums',
    question: 'Which members of this group are allowed to create albums?',
    name: 'group-albums',
  },
  {
    title: 'Group Videos',
    question: 'Which members of this group are allowed to upload videos?',
    name: 'group-videos',
  }
];

function SettingsStep() {
  return (
    <Box>
      {/* Privacy Options */}
      <Typography variant="h6" component="h3" gutterBottom>
        Privacy Options
      </Typography>
      <Divider sx={{ mb: '20px' }} />

      <RadioGroup name="privacy-options-group" defaultValue="public">
        {[
          {
            value: 'public',
            label: 'This is a public group',
            description: `Any site member can join this group.
This group will be listed in the groups directory and in search results.
Group content and activity will be visible to any site member.`,
          },
          {
            value: 'private',
            label: 'This is a private group',
            description: `Only people who request membership and are accepted can join the group.
This group will be listed in the groups directory and in search results.
Group content and activity will only be visible to members of the group.`,
          },
          {
            value: 'hidden',
            label: 'This is a hidden group',
            description: `Only people who are invited can join the group.
This group will not be listed in the groups directory or search results.
Group content and activity will only be visible to members of the group.`,
          }
        ].map(({ value, label, description }) => (
          <Box sx={{ marginBottom: '10px' }} key={value}>
            <FormControlLabel
              value={value}
              control={<Radio sx={radioStyle} />}
              label={<Typography variant="body1" sx={{ fontWeight: 500 }}>{label}</Typography>}
            />
            <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '32px' }}>
              {description.split('\n').map((line, i) => <div key={i}>{line}</div>)}
            </Typography>
          </Box>
        ))}
      </RadioGroup>

      {/* Group Invitations */}
      <Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: '20px' }}>
          Group Invitations
        </Typography>
        
        <Divider sx={{ mt: '20px', mb: '20px' }} />

        <Typography variant="body1" gutterBottom>
          Which members of this group are allowed to invite others?
        </Typography>

        <RadioGroup name="invitations-group" defaultValue="all">
          {['All group members', 'Organizers and Moderators only', 'Organizers only'].map((label, idx) => (
            <Box sx={{ marginBottom: '10px' }} key={label}>
              <FormControlLabel
                value={['all', 'organizers_moderators', 'organizers'][idx]}
                control={<Radio sx={radioStyle} />}
                label={<Typography variant="body2">{label}</Typography>}
              />
            </Box>
          ))}
        </RadioGroup>

      </Box>

      {/* Permissions Sections */}
      {permissionOptions.map(({ title, question, name }, index) => (
        <Box key={name}>
          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: index === 0 ? '20px' : '0px' }}>{title}</Typography>
          
        <Divider sx={{ mt: '20px', mb: '20px' }} />
          <Typography variant="body1" gutterBottom>{question}</Typography>
          <RadioGroup name={name} defaultValue="all">
            {['All group members', 'Organizers and Moderators only', 'Organizers only'].map((label, idx) => (
              <Box sx={{ marginBottom: '10px' }} key={label}>
                <FormControlLabel
                  value={['all', 'organizers_moderators', 'organizers'][idx]}
                  control={<Radio sx={radioStyle} />}
                  label={<Typography variant="body2">{label}</Typography>}
                />
              </Box>
            ))}
          </RadioGroup>
          {index < permissionOptions.length - 1 && <Divider sx={{ mt: '20px', mb: '20px' }} />}
        </Box>
      ))}
    </Box>
  );
}

const radioStyle = {
  color: 'grey',
  '&.Mui-checked': { color: '#ff9800' },
  transform: 'scale(0.9)',
};

export default SettingsStep;
