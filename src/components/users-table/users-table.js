import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Link } from '@mui/material';
import { HeaderCellWrap, TableRowWrap } from './users-table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllUsers as us_getAllUsers } from "../../services/users.service";
import { useNavigate } from 'react-router-dom';

function UsersTable() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const res = await us_getAllUsers()
        setData(res.data)
    }

    const handleUserClick = (email) => {
        try {
            navigate(`/login?email=${email}`)
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    const deleteUser = async (id) => {
        try {
            alert(id)
            // const res = await deleteData(id)
            // if (res) {
            //     // alert('יוזר נמחק בהצלחה')
            //     await getAllUsers()
            // }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    return (
        <Box className="UsersTable">
            <TableContainer component={Paper} sx={{ maxHeight: 540 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <HeaderCellWrap>מזהה</HeaderCellWrap>
                            <HeaderCellWrap>שם פרטי</HeaderCellWrap>
                            <HeaderCellWrap>שם משפחה</HeaderCellWrap>
                            <HeaderCellWrap>מייל</HeaderCellWrap>
                            <HeaderCellWrap></HeaderCellWrap>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRowWrap
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => {
                                            handleUserClick(row.email)
                                        }}
                                    >
                                        {row.id}
                                    </Link>
                                </TableCell>
                                <TableCell>{row.firstname}</TableCell>
                                <TableCell>{row.lastname}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell sx={{ width: "50px" }}>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => deleteUser(row.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRowWrap>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default UsersTable;