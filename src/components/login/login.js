import React from 'react';
import { Box, Button, Card } from '@mui/material';
import { TextFieldWrap } from './login.css';
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { loginUser as us_loginUser } from "../../services/users.service";
import { login as sliceLogin } from "../../state/slices/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserLogin({ currentEmail }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValue = {
        email: currentEmail || "",
        password: "",
    }

    const formVaildation = Yup.object({
        email: Yup.string().email('מייל לא תקין').required("שדה חובה"),
        password: Yup.string().required("שדה חובה")
    });

    const submit = (values, props) => {
        loginUser(values.email, values.password)
    }

    const loginUser = async (email, password) => {
        try {
            const res = await us_loginUser(email, password)
            if (res.code === 0) {
                dispatch(sliceLogin(res.data.user))
                navigate('/user')
            }
        } catch (error) {
            console.log(error)
            if(error && error.response && error.response.data) {
                if(error.response.data === 'User not found') {
                    alert('יוזר לא נמצא')
                }
                else if(error.response.data === 'Invalid password') {
                    alert('סיסמה שגויה')
                }
            }
        }
    }

    return (
        <Box className="UserLogin">
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
                                    label="מייל"
                                    name="email"
                                    fullWidth
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    helperText={<ErrorMessage name="email" />}
                                    error={props.errors.email && props.touched.email}
                                />
                                <TextFieldWrap
                                    label="סיסמה"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    helperText={<ErrorMessage name="password" />}
                                    error={props.errors.password && props.touched.password}
                                    sx={{
                                        mb: "10px !important"
                                    }}
                                />
                                <Button type="submit">
                                    התחבר
                                </Button>
                            </Form>
                        </Card>
                    )
                }}
            </Formik>
        </Box>
    );
}

export default UserLogin;