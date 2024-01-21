import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import UserDetails from '../user/user-detalis';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser as us_loadUser } from "../../services/users.service";
import { login as sliceLogin } from "../../state/slices/userSlice";

function UserPage() {
  const currentUser = useSelector((state) => state.user.data.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('useEffect')
    if (!currentUser) {
      loadUser()
    }
  }, [])

  const loadUser = async () => {
    try {
      const res = await us_loadUser()
      
      if (res && res.code === 0) {
        dispatch(sliceLogin(res.data))
      }
    } catch (error) {
      // console.log('error - loadUser')
    }
  }

  return (
    <Box className="UserPage">
      <UserDetails currentUser={currentUser} />
    </Box>
  );
}

export default UserPage;