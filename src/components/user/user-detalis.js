import React from 'react';
import { Box, Button, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser as us_deleteUser, logoutUser as us_logoutUser } from "../../services/users.service";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as sliceLogout } from "../../state/slices/userSlice";

function UserDetails({ currentUser }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!currentUser)
        return

    const logoutUser = async () => {
        try {
            const res = await us_logoutUser()
            console.log(res)
            if (res.code === 0) {
                alert('יוזר התנתק בהצלחה')
                dispatch(sliceLogout())
                navigate('/')
            }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    const deleteUser = async () => {
        try {
            const res = await us_deleteUser()
            if (res.code === 0) {
                alert('יוזר נמחק בהצלחה')
                navigate('/')
            }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    return (
        <Box className="UserDetails">
            UserDetails {currentUser.firstname}
            <Card
                sx={{
                    width: "500px",
                    m: "0 auto",
                    p: "40px 20px 20px 20px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Button>
                        עדכן
                    </Button>
                    <Button
                        onClick={() => logoutUser()}
                    >
                        התנתק
                    </Button>
                    <IconButton
                        aria-label="delete"
                        onClick={() => deleteUser()}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>

            </Card>
        </Box>
    );
}

export default UserDetails;