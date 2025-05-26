import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

const Field = ({
  label,
  withVisibility = true,
  labelFontSize = "16px",
  labelFontWeight = 500,
  value = "",           // Add value prop with default empty string
  onChange = () => {},  // Add onChange prop with default noop
}) => {
  const { t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedVisibility, setSelectedVisibility] = useState(t('profile.edit.field.visibility.public'));
  const [dob, setDob] = useState({ day: "", month: "", year: "" });

  const visibilityOptions = [
    t('profile.edit.field.visibility.public'),
    t('profile.edit.field.visibility.allMembers'),
    t('profile.edit.field.visibility.myConnections'),
    t('profile.edit.field.visibility.onlyMe')
  ];

  const months = [
    t('profile.edit.field.dateOfBirth.months.january'),
    t('profile.edit.field.dateOfBirth.months.february'),
    t('profile.edit.field.dateOfBirth.months.march'),
    t('profile.edit.field.dateOfBirth.months.april'),
    t('profile.edit.field.dateOfBirth.months.may'),
    t('profile.edit.field.dateOfBirth.months.june'),
    t('profile.edit.field.dateOfBirth.months.july'),
    t('profile.edit.field.dateOfBirth.months.august'),
    t('profile.edit.field.dateOfBirth.months.september'),
    t('profile.edit.field.dateOfBirth.months.october'),
    t('profile.edit.field.dateOfBirth.months.november'),
    t('profile.edit.field.dateOfBirth.months.december')
  ];

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      {/* configurable label */}
      <Typography
        sx={{
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
          mb: 1,
        }}
      >
        {label} <span style={{ color: "red" }}>*</span>
      </Typography>

      {label === t('profile.edit.form.fields.dateOfBirth') ? (
        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
          {/* Day */}
          <Select
            fullWidth
            size="small"
            value={dob.day}
            onChange={(e) => setDob({ ...dob, day: e.target.value })}
            displayEmpty
          >
            <MenuItem value="">{t('profile.edit.field.dateOfBirth.day')}</MenuItem>
            {[...Array(31)].map((_, i) => (
              <MenuItem key={i+1} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </Select>
          {/* Month */}
          <Select
            fullWidth
            size="small"
            value={dob.month}
            onChange={(e) => setDob({ ...dob, month: e.target.value })}
            displayEmpty
          >
            <MenuItem value="">{t('profile.edit.field.dateOfBirth.month')}</MenuItem>
            {months.map((m, i) => (
              <MenuItem key={i} value={i + 1}>{m}</MenuItem>
            ))}
          </Select>
          {/* Year */}
          <Select
            fullWidth
            size="small"
            value={dob.year}
            onChange={(e) => setDob({ ...dob, year: e.target.value })}
            displayEmpty
          >
            <MenuItem value="">{t('profile.edit.field.dateOfBirth.year')}</MenuItem>
            {[...Array(100)].map((_, i) => {
              const y = new Date().getFullYear() - i;
              return <MenuItem key={y} value={y}>{y}</MenuItem>;
            })}
          </Select>
        </Box>
      ) : (
        <input
          type="text"
          style={{
            width: "100%",
            padding: "16px 18px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            display: "block",
          }}
          value={value}         // Controlled input value
          onChange={onChange}   // Controlled input onChange
        />
      )}

      {withVisibility === "static" ? (
        <Typography variant="caption" sx={{ color: "gray", mt: 1, fontSize: "13px" }}>
          {t('profile.edit.field.visibility.public')}
        </Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Typography variant="caption" sx={{ color: "gray", mr: 1, fontSize: "13px" }}>
              {showOptions ? t('profile.edit.field.visibility.select') : selectedVisibility}
            </Typography>
            {!showOptions && (
              <Button
                onClick={() => setShowOptions(true)}
                variant="text"
                size="small"
                sx={{ textTransform: "none", p: 0, minWidth: 0 }}
              >
                {t('profile.edit.field.visibility.change')}
              </Button>
            )}
          </Box>

          {showOptions && (
            <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              <FormControl>
                <RadioGroup
                  value={selectedVisibility}
                  onChange={(e) => setSelectedVisibility(e.target.value)}
                >
                  {visibilityOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio size="small" />}
                      label={<Typography sx={{ fontSize: "13px" }}>{option}</Typography>}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Box sx={{ textAlign: "left" }}>
                <Button
                  onClick={() => setShowOptions(false)}
                  size="small"
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                >
                  {t('profile.edit.field.visibility.close')}
                </Button>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Field;
