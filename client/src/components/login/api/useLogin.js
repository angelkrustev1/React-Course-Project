import { useContext } from "react";
import { useNavigate } from "react-router"
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const loginUrl = 'http://localhost:3030/users/login'

export default function useLogin() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext)

    const initialValues = {
        email: '',
        password: '',
    }

    const login = async ({
        values: authData
    }) => {
        const abortController = new AbortController();

        const userData = await request.post(
            loginUrl,
            authData,
            { signal: abortController.signal }
        )

        userLoginHandler(userData);
        navigate('/products')
    }

    return {
        initialValues,
        login,
    }
}