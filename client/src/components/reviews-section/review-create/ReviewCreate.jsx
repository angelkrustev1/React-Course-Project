export default function ReviewCreate() {
    return (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Add Your Review</h3>

            <form>
                {/* Rating */}
                <div className="mb-6">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-800">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Rate this product (1-5)"
                        required
                    />
                </div>

                {/* Review */}
                <div className="mb-6">
                    <label htmlFor="review" className="block text-sm font-medium text-gray-800">Your Review</label>
                    <textarea
                        id="review"
                        name="review"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your review"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}
