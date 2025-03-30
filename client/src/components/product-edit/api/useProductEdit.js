import { useContext } from "react";
import { useNavigate } from "react-router"
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const productsUrl = 'http://localhost:3030/data/products'

export default function useProductEdit() {
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

    const edit = async ({
        values: gameData,
        productId
    }) => {
        const abortController = new AbortController();
        const options = {
            headers: {
                'X-Authorization': accessToken,
            },
            signal: abortController.signal,
        }

        await request.put(
            `${productsUrl}/${productId}`,
            { ...gameData, _id: productId },
            options
        )
        navigate(`/products/${productId}/details`)
    }

    return {
        initialValues,
        edit,
    }
}