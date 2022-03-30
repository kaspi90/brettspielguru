import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Selectgame() {
  const [Brettspiel, setBrettspiel] = React.useState('');
  const handleChange = (event) => {
    setBrettspiel(event.target.value);
    
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brettspiel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Brettspiel}
          label="Brettspiel"
          onChange={handleChange}
        >
          <MenuItem value={"Siedler von Catan"} >Siedler von Catan</MenuItem>
          <MenuItem value={"Carcasonne"} >Carcasonne</MenuItem>
          <MenuItem value={"Terraforming Mars"} >Terraforming Mars</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


