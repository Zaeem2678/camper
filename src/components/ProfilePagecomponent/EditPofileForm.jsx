import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Field from "./Feild";
import UserDetailsForm from "./UserDeatilForm";
import { useTranslation } from "react-i18next";

const EditForm = ({ onShowDialog }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("Detail");

  // 1. State for form fields
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Validation logic
    if (!nickname.trim() || !firstName.trim() || !lastName.trim()) {
      onShowDialog(
        "error",
        "Form Incomplete",
        "Please fill out all required fields before saving."
      );
      return;
    }

    // 3. Show success dialog if all fields valid
    onShowDialog(
      "success",
      "Profile Updated!",
      "Your profile details were successfully saved."
    );
  };

  const tabs = [
    { key: "detail", label: t("profile.edit.form.tabs.detail") },
    { key: "userDetails", label: t("profile.edit.form.tabs.userDetails") },
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
        {t("profile.edit.form.title")}
      </Typography>

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

      {activeTab === t("profile.edit.form.tabs.detail") && (
        <>
          {/* Pass value and onChange to Fields */}
          <Field
            label={t("profile.edit.form.fields.nickname")}
            withVisibility="static"
            labelFontSize="14px"
            labelFontWeight={500}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Field
            label={t("profile.edit.form.fields.firstName")}
            labelFontSize="14px"
            labelFontWeight={500}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Field
            label={t("profile.edit.form.fields.lastName")}
            labelFontSize="14px"
            labelFontWeight={500}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </>
      )}

      {activeTab === t("profile.edit.form.tabs.userDetails") && <UserDetailsForm />}

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 1, px: 3, py: 1, fontSize: "14px", alignSelf: "left" }}
      >
        {t("profile.edit.form.saveChanges")}
      </Button>
    </Box>
  );
};

export default EditForm;
