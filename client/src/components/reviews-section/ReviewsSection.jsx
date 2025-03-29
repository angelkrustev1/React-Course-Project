import Review from "./reivew/Review";
import ReviewCreate from "./review-create/ReviewCreate";

export default function ReviewsSection() {
    return (
        <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Customer Reviews</h3>

            {/* Review List */}
            <div className="space-y-8">
                <Review />
            </div>

            {/* Add a Review Section */}
            <ReviewCreate />
        </div>
    );
}
