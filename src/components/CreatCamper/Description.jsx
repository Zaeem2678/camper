import React, { useState } from 'react';
import { Box, Typography, Button, } from '@mui/material';
import ActionButtons from './ActionsButtons';

const styles = {
  wrapper: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  label: {
    fontWeight: 500,
    fontSize: '16px',
  },
  helperText: {
    fontSize: '12px',
    color: '#555',
    width:"50%",
    marginBottom:3,
  },
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    width: '50%',
    marginTop: '8px',
  },
  textarea: {
    padding: '10px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    width: '100%',
    minHeight: '200px',
    marginTop: '8px',
    resize: 'vertical',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px',
  },
  button: {
    borderRadius: '16px',
    padding: '10px 24px',
    backgroundColor: '#f90',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
  },
};

const Description = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    welcome: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h5" fontWeight={600}>
        Description
      </Typography>

      <Box>
        <Typography sx={styles.label}>Give your camper a name</Typography>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Camper name"
          style={styles.input}
        />
        <Typography sx={styles.helperText} mt={1}>
          Keep the name short and crisp. If it is too long, it will not be displayed correctly to the tenant.
        </Typography>
      </Box>

      <Box>
        <Typography sx={styles.label}>Description</Typography>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe your camper..."
          style={styles.textarea}
        />
      </Box>

      <Box>
        <Typography sx={styles.label}>Welcome</Typography>
        <textarea
          name="welcome"
          value={form.welcome}
          onChange={handleChange}
          placeholder="Write a welcome message..."
          style={styles.textarea}
        />
      </Box>

      <Box>
        <Typography sx={styles.label}>Further Information</Typography>
        <textarea
          name="additionalInfo"
          value={form.additionalInfo}
          onChange={handleChange}
          placeholder="Any additional details..."
          style={styles.textarea}
        />
      </Box>

    <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Description;
