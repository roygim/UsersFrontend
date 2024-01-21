import React from 'react';
import { Box, Button, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser as us_deleteUser } from "../../services/users.service";
import { useNavigate } from 'react-router-dom';

function UserDetails({ currentUser }) {
    const navigate = useNavigate();

    if (!currentUser)
        return

    const deleteUser = async () => {
        try {
            const res = await us_deleteUser()
            if(res.code === 0) {
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
                    <Button>
                        התנתק
                    </Button>
                    {/* <Button>
                        מחק
                    </Button> */}
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