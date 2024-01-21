import axios from "axios";

export const getAllUsers = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/users`
        const response = await axios.get(url, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log('error - getAllUsers')
    }
}

export const loginUser = async (email, password) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/login`

        const data = {
            email: email,
            password: password
        }

        const response = await axios.post(url, data, { withCredentials: true });

        return response.data;
    } catch (error) {
        console.log('error - getAllUsers')
        throw error
    }
}

export const registerUser = async (user) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/register`

        const response = await axios.post(url, user, { withCredentials: true });

        return response.data;
    } catch (error) {
        console.log('error - getAllUsers')
        throw error
    }
}

export const logoutUser = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/logout`

        const response = await axios.delete(url, { withCredentials: true });

        return response.data;
    } catch (error) {
        console.log('error - logoutUser')
        throw error
    }
}

export const deleteUser = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/users/delete`

        const response = await axios.delete(url, { withCredentials: true });

        return response.data;
    } catch (error) {
        console.log('error - deleteUser')
        throw error
    }
}

export const loadUser = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/loaduser`

        const response = await axios.post(url, null, { withCredentials: true });

        return response.data;
    } catch (error) {
        throw error
    }
}