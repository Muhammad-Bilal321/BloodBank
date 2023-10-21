import React, { useEffect, useState } from 'react';
import { Box, Grid, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { fbGet } from '../../Config/firebaseMethod';

function DonorList() {
  const [availableDonor, setAvailableDonor] = useState([]);

  useEffect(() => {
   return fbGet("Donor-Data").then((res) => {
      setAvailableDonor(res);
    })
    .catch((err)=>{
      console.log(err)
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <b>Available Donor Group</b>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {availableDonor.map((data, index) => (
          <Grid item xs={3} sm={4} md={3} key={index}>
            <List className='' style={{ margin: '0', padding: '0' }}>
              <ListItemButton className='bg-dark text-light'>
                <ListItemText>{data.name}</ListItemText>
                <ListItemText>{data.bloodtype} <BloodtypeIcon color='error' /></ListItemText>
              </ListItemButton>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DonorList;
