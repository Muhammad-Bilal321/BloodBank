import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'; // Import auth correctly
import { app } from '../Config/firebaseConfig'; // Import app instance
import { useNavigate } from 'react-router-dom';
import {getDatabase, ref, set} from 'firebase/database'
import { Button, TextField } from '@mui/material';

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function SignupPage() {


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    const contactNo = e.target.contactNo.value;
    const bloodType = e.target.bloodType.value;

    const auth = getAuth(app); 
    const db = getDatabase(app)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        const userId = user.uid
        const dbRef = ref(db, `usersRegistration/${userId}`)
        console.log(user, 'authData');
        navigate('/login')
set(dbRef,{
  email:user.email,
  username:username,
  contactNo:contactNo,
  bloodType:bloodType,
})
.then(()=>{

  console.log("User data stored in the database")
  navigate('/login')
})
.catch((err)=>{
  console.log(err)
  
})
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleClick=()=>{
    navigate('/login')
  }

  const navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="text-center">User Registration</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3 text-center">
          <TextField
            name="username"
            type="text"
            className="w-50 "
            label="Username"
          />
        </div>
        <div className="mb-3 text-center">
          <TextField
            name="email"
            type="email"
            className="w-50 "
            label="Email"
          />
        </div>
        <div className="mb-3 text-center">
          <TextField
            name="password"
            type="password"
            className="w-50 "
            label="Password"
          />
        </div>
        <div className="mb-3 text-center">
          <TextField
            name="contactNo"
            type="number"
            className="w-50 "
            label="Contact No."
            maxLength={11}
          />
        </div>
        <div className="mb-3 text-center">
        <FormControl className="w-50 " margin="normal">
          <InputLabel>Blood Type</InputLabel>
          <Select
            name="bloodType"
           
          >
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="d-grid gap-2 ">
          <div className='text-center'>
          <Button type="submit" variant="contained" color="primary" className="w-50 ">
            Register
          </Button></div>
        </div>
      </form>
      <div className="text-center mt-3">
        <Button color="primary" onClick={handleClick}>
          Already have an account? Login
        </Button>
      </div>
    </div>
  );
}
