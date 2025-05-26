import React from "react";
import { Box } from "@mui/material";
import Field from "./Feild";
import { useTranslation } from 'react-i18next';

const UserDetailsForm = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%" }}>
      <Field label={t('profile.edit.form.fields.dateOfBirth')} />
      <Field 
        label={t('profile.edit.form.fields.streetNumber')}  
        labelFontSize="14px"
        labelFontWeight={500} 
      />
      <Field 
        label={t('profile.edit.form.fields.city')}  
        labelFontSize="14px"
        labelFontWeight={500}
      />
      <Field 
        label={t('profile.edit.form.fields.state')}  
        labelFontSize="14px"
        labelFontWeight={500}
      />
      <Field 
        label={t('profile.edit.form.fields.country')} 
        labelFontSize="14px"
        labelFontWeight={500} 
      />
      <Field 
        label={t('profile.edit.form.fields.telephone')} 
        labelFontSize="14px"
        labelFontWeight={500} 
      />
      <Field 
        label={t('profile.edit.form.fields.drivingLicense')}  
        labelFontSize="14px"
        labelFontWeight={500}
      />
      <Field 
        label={t('profile.edit.form.fields.personalLaw')}  
        labelFontSize="14px"
        labelFontWeight={500}
      />
    </Box>
  );
};

export default UserDetailsForm;
