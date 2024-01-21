import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import UserDetails from '../user/user-detalis';
import { useSelector } from 'react-redux';

function UserPage() {
  const currentUser = useSelector((state) => state.user.data.currentUser)

  useEffect(() => {
    if(currentUser) {
      console.log(currentUser)
    }       
  }, [])

  return (
    <Box className="UserPage">
      <UserDetails currentUser={currentUser} />
    </Box>
  );
}

export default UserPage;