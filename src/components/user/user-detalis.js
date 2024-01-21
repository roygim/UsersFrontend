import React from 'react';
import { Box } from '@mui/material';

function UserDetails({ currentUser }) {
    return (
        <Box className="UserDetails">
            UserDetails {currentUser.firstname}
        </Box>
    );
}

export default UserDetails;