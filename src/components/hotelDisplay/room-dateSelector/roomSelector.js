import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RoomSelector({roomType, setRoomType}) {

  const handleChange = (event) => {
    setRoomType(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="room-selector">Room</InputLabel>
        <Select
          labelId="room-selector"
          id="room-selector"
          value={roomType}
          label="Room"
          onChange={handleChange}
        >
          <MenuItem value={"single"}>Single</MenuItem>
          <MenuItem value={"double"}>Double</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
