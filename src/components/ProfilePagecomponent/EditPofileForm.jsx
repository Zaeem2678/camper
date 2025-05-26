import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Field from "./Feild";
import UserDetailsForm from "./UserDeatilForm";
import { useTranslation } from 'react-i18next';

const EditForm = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("Detail");

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic here
  };

  const tabs = [
    { key: 'detail', label: t('profile.edit.form.tabs.detail') },
    { key: 'userDetails', label: t('profile.edit.form.tabs.userDetails') }
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: 3,
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography sx={{ fontWeight: 500, mb: 3, fontSize: 22 }}>
        {t('profile.edit.form.title')}
      </Typography>

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid #ccc",
          mb: 4,
          width: "100%",
        }}
      >
        {tabs.map((tab) => (
          <Box
            key={tab.key}
            sx={{
              mr: 3,
              pb: 1,
              borderBottom: activeTab === tab.label ? "3px solid" : "none",
              borderColor: "primary.main",
              color: activeTab === tab.label ? "primary.main" : "text.primary",
              fontWeight: activeTab === tab.label ? "600" : "500",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </Box>
        ))}
      </Box>

      {/* Form Sections */}
      {activeTab === t('profile.edit.form.tabs.detail') && (
        <>
          <Field 
            label={t('profile.edit.form.fields.nickname')} 
            withVisibility="static" 
            labelFontSize="14px"
            labelFontWeight={500} 
          />
          <Field 
            label={t('profile.edit.form.fields.firstName')} 
            labelFontSize="14px"
            labelFontWeight={500} 
          />
          <Field 
            label={t('profile.edit.form.fields.lastName')} 
            labelFontSize="14px"
            labelFontWeight={500} 
          />
        </>
      )}

      {activeTab === t('profile.edit.form.tabs.userDetails') && <UserDetailsForm />}

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 1, px: 3, py: 1, fontSize: "14px", alignSelf: "left" }}
      >
        {t('profile.edit.form.saveChanges')}
      </Button>
    </Box>
  );
};

export default EditForm;
