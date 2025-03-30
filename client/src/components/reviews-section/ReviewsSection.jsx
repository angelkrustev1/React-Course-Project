import { useContext, useCallback } from "react";
import Review from "./reivew/Review";
import ReviewCreate from "./review-create/ReviewCreate";
import Spiner from "../spiner/Spiner";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";

const reviewsUrl = 'http://localhost:3030/data/reviews';

export default function ReviewsSection({ productId }) {
    const filterReviews = useCallback((reviews) => {
        return reviews.filter(review => review._productId === productId);
    }, [productId]);

    const { _id, username, accessToken } = useContext(UserContext);
    const { pending, state: reviews, setState: setReviews } = useFetch(reviewsUrl, [], filterReviews);

    return (
        <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Customer Reviews</h3>

            {/* Loading Spinner */}
            {pending ? (
                <Spiner />
            ) : (
                <>
                    {/* Review List */}
                    <div className="space-y-8">
                        {reviews.length > 0 ? (
                            reviews.map(review => (
                                <Review
                                key={review._id}
                                onDelete={setReviews}
                                { ...review }
                                />
                            ))
                        ) : (
                            <p className="text-gray-700">No reviews yet.</p>
                        )}
                    </div>
                </>
            )}

            {/* Add a Review Section */}
            {accessToken && <ReviewCreate
            productId={productId}
            username={username}
            onCreate={setReviews}
            />}
        </div>
    );
}
