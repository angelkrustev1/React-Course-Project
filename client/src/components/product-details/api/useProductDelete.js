import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import request from "../../../utils/request";

const productsUrl = 'http://localhost:3030/data/products'

export default function useProductDelete(_ownerId) {
    const navigate = useNavigate();
    const { _id: userId, accessToken } = useContext(UserContext)

    const deleteProduct = async (productId) => {
        if (_ownerId !== userId) {
            return;
        }

        const abortController = new AbortController();
        const options = {
            headers: {
                'X-Authorization': accessToken,
            },
            signal: abortController.signal,
        }

        await request.delete(`${productsUrl}/${productId}`, null, options)
        navigate('/products')
    }

    return { deleteProduct }
}