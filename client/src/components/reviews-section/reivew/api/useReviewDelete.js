import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import request from "../../../../utils/request";

const reviewsUrl = 'http://localhost:3030/data/reviews'

export default function useReviewDelete(onDelete) {
    const { accessToken } = useContext(UserContext)

    const deleteReview = async (reviewId) => {
        const abortController = new AbortController();
        const options = {
            headers: {
                'X-Authorization': accessToken
            },
            signal: abortController.signal,
        }

        await request.delete(`${reviewsUrl}/${reviewId}`, null, options)
        onDelete(state => state.filter(review => review._id !== reviewId))
    }

    return { deleteReview }
}