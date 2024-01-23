import React from 'react';
import { Box } from '@mui/material';
import UsersList from '../users/users-list/users-list';

function MainPage() {

  return (
    <Box className="MainPage">
      <UsersList />
    </Box>
  );
}

export default MainPage;