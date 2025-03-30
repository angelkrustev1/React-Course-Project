import { useContext, useCallback } from "react";
import { UserContext } from "../../contexts/UserContext";
import Review from "./reivew/Review";
import ReviewCreate from "./review-create/ReviewCreate";
import Spiner from "../spiner/Spiner";
import useFetch from "../../hooks/useFetch";

const reviewsUrl = 'http://localhost:3030/data/reviews';

export default function ReviewsSection({ productId }) {
    const filterReviews = useCallback((reviews) => {
        return reviews.filter(review => review._productId === productId);
    }, [productId]);

    const { username, accessToken } = useContext(UserContext);
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
                                    {...review}
                                />
                            ))
                        ) : (
                            <p className="text-gray-600 text-xl font-medium text-center mt-8 py-4 px-6 bg-gray-100 rounded-lg shadow-md">
                                No reviews yet.
                            </p>
                        )}
                    </div>
                </>
            )}

            {/* Add a Review Section */}
            {!accessToken && (
                <div className="mt-8 text-center py-4 px-6 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-600 rounded-lg shadow-md">
                    <p className="font-semibold text-lg">
                        You need to be logged in to leave a review.
                    </p>
                    <p className="mt-2 text-sm">
                        Please log in to share your thoughts about this product.
                    </p>
                </div>
            )}

            {accessToken && (
                <ReviewCreate
                    productId={productId}
                    username={username}
                    onCreate={setReviews}
                />
            )}
        </div>
    );
}
