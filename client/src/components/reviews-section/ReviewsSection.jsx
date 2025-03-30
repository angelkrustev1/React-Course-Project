import { useContext } from "react";
import Review from "./reivew/Review";
import ReviewCreate from "./review-create/ReviewCreate";
import { UserContext } from "../../contexts/UserContext";

export default function ReviewsSection() {
    const { accessToken } = useContext(UserContext)

    return (
        <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Customer Reviews</h3>

            {/* Review List */}
            <div className="space-y-8">
                <Review />
            </div>

            {/* Add a Review Section */}
            {accessToken && <ReviewCreate />}
        </div>
    );
}
