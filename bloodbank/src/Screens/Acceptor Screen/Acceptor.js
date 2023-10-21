import React, { useEffect, useState } from 'react';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { fbGet } from '../../Config/firebaseMethod';

export default function Acceptor() {
  const [data, setData] = useState([]);
  const [blood, setBlood] = useState('A+'); // Set a valid blood group here
  
//   useEffect(() => {
//     fbGet("Donor-Data")
//       .then((res) => {
//         const filteredData = res.filter((name) => name.bloodtype == blood);
//         setData([...filteredData]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [blood]);
  useEffect(()=>{
   return fbGet("Donor-Data")
    .then((res)=>{
        const filteredData = res.filter((name) => name.bloodtype == blood);
        setData([...filteredData]);
    })
  })

  return (
    <div>
      <div className='cards'>
        {data.map((user) => (
          <div className='carding' key={user.id}>
            <p><BloodtypeIcon /></p>
            <h5>Name: {user.name}</h5>
            <p>Blood Group: {user.bloodtype}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
