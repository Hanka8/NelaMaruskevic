import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import TabLabels from './TabLabels';
import Main from './pages/Main';
import About from './pages/About';

const tabsData = [
  { label: 'Nela Maruškevič', a11yProps: index => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` }) },
  { label: 'o umělci', a11yProps: index => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` }) },
  // { label: 'kontakt', a11yProps: index => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` }) },
  // { label: 'cv', a11yProps: index => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` }) },
];

function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      width: '100%'
       }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabLabels value={value} onChange={handleChange} tabs={tabsData} />
      </Box>
      <TabPanel value={value} index={0} key={0}>
       <Main/>
      </TabPanel>
      <TabPanel value={value} index={1} key={1}>
        <About/>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;