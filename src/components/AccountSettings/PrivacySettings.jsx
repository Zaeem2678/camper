import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const selectStyle = {
  width: '100%',
  minHeight: '32px',
  padding: '1px 10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '0.9rem',
  background: '#fff',
  marginLeft: 0,
  marginTop: 0,
};

const labelStyle = {
  fontWeight: 500,
  fontSize: '0.9rem',
  color: '#222',
  marginBottom: 0,
  marginRight: '18px',
  minWidth: '120px',
};

const tableRowStyle = {
  display: 'flex',
  alignItems: 'center',
  minHeight: 38,
  marginBottom: 3,
};

const tableHeaderStyle = {
  display: 'flex',
  fontWeight: 600,
  fontSize: '0.95rem',
  marginBottom: 3,
};

const PrivacySettings = () => {
  const { t } = useTranslation();
  const [firstNameVisibility, setFirstNameVisibility] = useState('public');
  const [lastNameVisibility, setLastNameVisibility] = useState('public');

  const [fieldsVisibility, setFieldsVisibility] = useState({
    dateOfBirth: 'public',
    streetNumber: 'public',
    city: 'public',
    state: 'public',
    country: 'public',
    telephone: 'public',
    drivingLicense: 'public',
    personalLaw: 'public',
  });

  const visibilityOptions = [
    { value: 'public', label: t('account.privacySettings.public') },
    { value: 'allMembers', label: t('account.privacySettings.allMembers') },
    { value: 'allConnections', label: t('account.privacySettings.allConnections') },
    { value: 'onlyMe', label: t('account.privacySettings.onlyMe') },
  ];

  const userFields = [
    { key: 'nickname', label: t('account.loginInformation.nickname') || 'Nickname', isDropdown: false },
    { key: 'firstName', label: t('account.loginInformation.firstName') || 'First Name', isDropdown: true, value: firstNameVisibility, setValue: setFirstNameVisibility },
    { key: 'lastName', label: t('account.loginInformation.lastName') || 'Last Name', isDropdown: true, value: lastNameVisibility, setValue: setLastNameVisibility },
  ];

  const additionalFields = [
    { key: 'dateOfBirth', label: t('profile.edit.form.fields.dateOfBirth') || 'Date of Birth' },
    { key: 'streetNumber', label: t('profile.edit.form.fields.streetNumber') || 'Street Number' },
    { key: 'city', label: t('profile.edit.form.fields.city') || 'City' },
    { key: 'state', label: t('profile.edit.form.fields.state') || 'State' },
    { key: 'country', label: t('profile.edit.form.fields.country') || 'Country' },
    { key: 'telephone', label: t('profile.edit.form.fields.telephone') || 'Telephone' },
    { key: 'drivingLicense', label: t('profile.edit.form.fields.drivingLicense') || 'Driving License Number' },
    { key: 'personalLaw', label: t('profile.edit.form.fields.personalLaw') || 'Personal Law Number' },
  ];

  const handleFieldVisibilityChange = (field, value) => {
    setFieldsVisibility(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ p: 4, borderRadius: 2, background: '#fff', maxWidth: "100%" }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        {t('account.privacySettings.profileVisibilitySettings') || 'Profile Visibility Settings'}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', mb: 3, mt: 0.5 }}>
        {t('account.privacySettings.profileVisibilitySubtext') || 'Select who can see your profile detail'}
      </Typography>

      {/* User Fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 1 }}>
        <Box sx={tableHeaderStyle}>
          <Box sx={{ flex: 1 }}>{t('account.privacySettings.detail') || 'Detail'}</Box>
          <Box sx={{width:"45%"}}>{t('account.privacySettings.visibility') || 'Visibility'}</Box>
        </Box>
        {userFields.map(field => (
          <Box key={field.key} sx={tableRowStyle}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Typography sx={labelStyle}>{field.label}</Typography>
            </Box>
            <Box sx={{ width: "45%"}}>
              {field.isDropdown ? (
                <Select
                  value={field.value}
                  onChange={e => field.setValue(e.target.value)}
                  size="small"
                  sx={selectStyle}
                  MenuProps={{ PaperProps: { sx: { maxHeight: 160 } } }}
                >
                  {visibilityOptions.map(opt => (
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                  ))}
                </Select>
              ) : (
                <Typography sx={{ fontSize: '1rem', color: '#333', pl: 1 }}>Public</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Additional Fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
        <Box sx={tableHeaderStyle}>
          <Box sx={{ flex: 1 }}>{t('account.privacySettings.detail') || 'Detail'}</Box>
          <Box sx={{ width:"45%" }}>{t('account.privacySettings.visibility') || 'Visibility'}</Box>
        </Box>
        {additionalFields.map(field => (
          <Box key={field.key} sx={tableRowStyle}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Typography sx={labelStyle}>{field.label}</Typography>
            </Box>
            <Box sx={{ width:"45%"}}>
              <Select
                value={fieldsVisibility[field.key]}
                onChange={e => handleFieldVisibilityChange(field.key, e.target.value)}
                size="small"
                sx={selectStyle}
                MenuProps={{ PaperProps: { sx: { maxHeight: 160 } } }}
              >
                {visibilityOptions.map(opt => (
                  <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          alignSelf: 'flex-start',
          bgcolor: '#ffa600',
          color: '#fff',
          fontWeight: 600,
          fontSize: '14px',
          padding: '8px 22px',
          mt: 1,
          '&:hover': { bgcolor: '#ff8800' },
        }}
      >
        {t('account.loginInformation.update')}
      </Button>
    </Box>
  );
};

export default PrivacySettings;
