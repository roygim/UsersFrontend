import axios from "axios";

export const getAllUsers = async () => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/users`
        const response = await axios.get(url);
        console.log(response)
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

        const response = await axios.post(url, data);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log('error - getAllUsers')
        throw error
    }
}