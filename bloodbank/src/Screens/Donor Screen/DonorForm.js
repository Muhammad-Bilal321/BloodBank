import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { fbAdd } from '../../Config/firebaseMethod';
export default function DonorForm() {
    const [DonorForm,setDonorForm]= useState({
        name:"",
        contactNo:0,
        address:"",
        bloodtype:"A+",
    })
    const handleInput =(e)=>{
        const { name, value } = e.target;
        setDonorForm({...DonorForm,[name]: value})
    }
const handleSubmit=(e)=>{
    e.preventDefault()
    fbAdd("usersRegistration",DonorForm)
    .then((res)=>{  
        alert("Data Has Been Sent",res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="my-3 text-center">
      <TextField
        name="name"
        type="text"
        className="w-50 "
        label="Name"
        value={DonorForm.name}
        onChange={handleInput}
      />
    </div>
 
    <div className="mb-3 text-center">
      <TextField
        name="address"
        type="text"
        className="w-50 "
        label="Address"
        value={DonorForm.address}
        onChange={handleInput}
      />
    </div>
    <div className="mb-3 text-center">
      <TextField
        name="contactNo"
        type="number"
        className="w-50 "
        label="Contact No."
        value={DonorForm.contactNo}
        onChange={handleInput}
      />
    </div>
    <div className="mb-3 text-center">
    <FormControl className="w-50 " margin="normal">
      <InputLabel>Blood Type</InputLabel>
      <Select
        name="bloodtype"
        className='text-danger'
        value={DonorForm.bloodtype}
        onChange={handleInput}
      >
        <MenuItem value="O+" className='text-danger'>O+</MenuItem>
        <MenuItem value="A+" className='text-danger'>A+</MenuItem>
        <MenuItem value="B+" className='text-danger'>B+</MenuItem>
        <MenuItem value="AB" className='text-danger'>AB</MenuItem>
      </Select>
    </FormControl>
    </div>
    <div className="d-grid gap-2 ">
      <div className='text-center'>
      <Button type="submit" variant="contained" color="error" className="w-50 ">
        Enter
      </Button></div>
      
    </div>
  </form>
  )
}
