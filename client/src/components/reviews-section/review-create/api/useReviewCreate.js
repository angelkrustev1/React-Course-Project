import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../../contexts/UserContext";
import request from "../../../../utils/request";

const reviewsUrl = 'http://localhost:3030/data/reviews'

export default function useReviewCreate() {
    const { accessToken } = useContext(UserContext)

    const initialValues = {
        rating: 1,
        comment: '',
    }

    const create = async ({
        values: reviewData,
        productId,
        onCreate,
        username: author,
    }) => {
        const abortController = new AbortController();
        const options = {
            headers: {
                'X-Authorization': accessToken, 
            },
            signal: abortController.signal,
        }

        const review = await request.post(
            reviewsUrl, { ...reviewData, _productId: productId, author: author }, options
        )
        onCreate(state => [...state, review])
    }

    return {
        initialValues, 
        create,
    }
}