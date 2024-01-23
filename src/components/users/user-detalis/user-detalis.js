import React from 'react';
import { Box, Button, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser as us_deleteUser, logoutUser as us_logoutUser, updateUser as us_updateUser } from "../../../services/users.service";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as sliceLogout, update as sliceUpdate } from "../../../state/slices/userSlice";
import { ErrorMessage, Formik, Form } from 'formik';
import { TextFieldWrap } from './user-detalis.css';
import * as Yup from "yup";

function UserDetails({ currentUser }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!currentUser)
        return

    const initialValue = {
        firstname: currentUser.firstname || "",
        lastname: currentUser.lastname || "",
        email: currentUser.email || ""
    }

    const formVaildation = Yup.object({
        firstname: Yup.string().required("שדה חובה"),
        lastname: Yup.string().required("שדה חובה"),
        email: Yup.string().email('מייל לא תקין').required("שדה חובה"),
    });

    const submit = (values, props) => {
        updateUser(values)
    }

    const updateUser = async (values) => {
        try {
            const user = {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
            }
            const res = await us_updateUser(user)

            if (res.code === 0) {
                dispatch(sliceUpdate(res.data))
                alert('יוזר עודכן בהצלחה')
            }
        } catch (error) {
            if(error && error.response && error.response.data) {
                alert(error.response.data)
            }
        }
    }

    const logoutUser = async () => {
        try {
            const res = await us_logoutUser()

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
            <Formik
                initialValues={initialValue}
                validationSchema={formVaildation}
                onSubmit={submit}
                enableReinitialize={true}
            >
                {(props) => {
                    return (
                        <Card
                            sx={{
                                width: "500px",
                                m: "0 auto",
                                p: "40px 20px 20px 20px"
                            }}
                        >
                            <Form>
                                <TextFieldWrap
                                    label="שם פרטי"
                                    name="firstname"
                                    fullWidth
                                    value={props.values.firstname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    helperText={<ErrorMessage name="firstname" />}
                                    error={props.errors.firstname && props.touched.firstname}
                                />
                                <TextFieldWrap
                                    label="שם משפחה"
                                    name="lastname"
                                    fullWidth
                                    value={props.values.lastname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    helperText={<ErrorMessage name="lastname" />}
                                    error={props.errors.lastname && props.touched.lastname}
                                />
                                <TextFieldWrap
                                    label="מייל"
                                    name="email"
                                    fullWidth
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    helperText={<ErrorMessage name="email" />}
                                    error={props.errors.email && props.touched.email}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Button type="submit">
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
                            </Form>
                        </Card>
                    )
                }}
            </Formik>
            {/* <Card
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

            </Card> */}
        </Box>
    );
}

export default UserDetails;