import React from 'react';
import { Box } from '@mui/material';
import UsersTable from '../users-table/users-table';

function MainPage() {

  return (
    <Box className="MainPage">
      <UsersTable />
    </Box>
  );
}

export default MainPage;