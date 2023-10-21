import React, { useEffect, useState } from 'react';
import { Box, Grid, List, ListItemButton, ListItemText, ListItemIcon,Button } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { fbGet } from "../Config/firebaseMethod";
import { useNavigate } from 'react-router-dom';

function BloodGroupCards() {
  const [availableBlood, setAvailableBlood] = useState([]);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()
  useEffect(async() => {
   const myData =  await localStorage.getItem("user_data");
   setUserData(JSON.parse(myData))

   return fbGet("usersRegistration").then((res) => {
      console.log('==================================>',res)
      setAvailableBlood(res);
    });
  }, []);
  const handleClick =()=>{
navigate('/acceptor')
  }

  return (
    <>
    <br/>
    <Button onClick={handleClick} color='error' variant='contained'>Search O</Button>
    <br/>
    <br/>
    <Box sx={{ flexGrow: 1 }}>
      <b>Available Blood Group</b>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {availableBlood && availableBlood.length && availableBlood.map((data, index) => {
          if(data.bloodType === userData.bloodType ){
            return <Grid item xs={3} sm={4} md={3} key={index}>
                <List className='' style={{ margin: '0', padding: '0' }}>
                  <ListItemButton className='bg-dark text-light'>
                    <ListItemText>{data.username}</ListItemText>
                    <ListItemText>{data.bloodType} <BloodtypeIcon color='error' /></ListItemText>
                  </ListItemButton>
                </List>
              </Grid>
          }
})}
      </Grid>
    </Box>
    </>
  );
}

export default BloodGroupCards;
