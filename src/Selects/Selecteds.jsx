import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

export default function Selecteds() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>5</MenuItem>
          <MenuItem value={20}>10</MenuItem>
          <MenuItem value={30}>15</MenuItem>
          <MenuItem value={40}>20</MenuItem>
          <MenuItem value={50}>25</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}