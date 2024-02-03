import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import FirstTabs from './FirstTabs';
import SecondTabs from './SecondTabs';
import ThirdTabs from './ThirdTabs';

function MainTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

MainTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Transaction" {...a11yProps(0)} />
          <Tab label="Success" {...a11yProps(1)} />
          <Tab label="Pending" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <MainTabs value={value} index={0}>
        <FirstTabs />
      </MainTabs>
      <MainTabs value={value} index={1}>
        <SecondTabs />
      </MainTabs>
      <MainTabs value={value} index={2}>
        <ThirdTabs />
      </MainTabs>
    </Box>
  );
}