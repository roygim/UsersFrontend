import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import UserLogin from '../login/login';

function LoginPage() {
  const location = useLocation()
  const [currentEmail, setCurrentEmail] = useState("")

  useEffect(() => {
    const email = new URLSearchParams(location.search).get('email')
    if(email) {
      setCurrentEmail(email)
    }    
  }, [])

  return (
    <Box className="LoginPage">
      <UserLogin currentEmail={currentEmail} />
    </Box>
  );
}

export default LoginPage;