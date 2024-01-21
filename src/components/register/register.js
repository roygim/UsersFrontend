import React from 'react';
import { Box, Button, Card } from '@mui/material';
import { TextFieldWrap } from './register.css';
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { registerUser as us_registerUser } from "../../services/users.service";

function UserRegister() {

    const initialValue = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    }

    const formVaildation = Yup.object({
        firstname: Yup.string().required("שדה חובה"),
        lastname: Yup.string().required("שדה חובה"),
        email: Yup.string().email('מייל לא תקין').required("שדה חובה"),
        password: Yup.string().required("שדה חובה")
    });

    const submit = (values, props) => {
        registerUser(values)
    }

    const registerUser = async (values) => {
        try {
            const user = {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password
            }
            const res = await us_registerUser(user)
            console.log(res)
            if (res.code === 0) {
            }
        } catch (error) {
            console.log(error)
            if(error && error.response && error.response.data) {
                alert(error.response.data)
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
                                    הירשם
                                </Button>
                            </Form>
                        </Card>
                    )
                }}
            </Formik>
        </Box>
    );
}

export default UserRegister;