import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const registerUrl = 'http://localhost:3030/users/register'

export default function useRegister() {
    const navigate = useNavigate()
    const { userLoginHandler } = useContext(UserContext)

    const initialValues = {
        email: '',
        username: '',
        password: '',
        confirm: '',
    }

    const register = async ({ values: authData }) => {
        if (authData.password !== authData.confirm) {
            throw new Error("Passwords do not match.")
        }

        const abortController = new AbortController();

        const userData = await request.post(
            registerUrl,
            authData,
            { signal: abortController.signal }
        )

        userLoginHandler(userData)
        navigate('/products')
    }

    return {
        initialValues,
        register,
    }
}