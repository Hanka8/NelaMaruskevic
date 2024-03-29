import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TabPanel({ children, value, index, ...other }) {
  return (
    <span
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </span>
  );
}

export default TabPanel;
