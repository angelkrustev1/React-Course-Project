import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const productsUrl = 'http://localhost:3030/data/products'

export default function useProductCreate() {
    const navigate = useNavigate();
    const { accessToken } = useContext(UserContext)

    const initialValues = {
        title: '',
        category: '',
        price: 1,
        quantity: 1,
        imageUrl: '',
        summary: '',
    }

    const create = async ({
        values: productData
    }) => {
        const abortController = new AbortController();
        const options = {
            headers: {
                'X-Authorization': accessToken,
            },
            signal: abortController.signal,
        }

        await request.post(productsUrl, productData, options)
        navigate('/products')
    }

    return {
        initialValues,
        create,
    }
}