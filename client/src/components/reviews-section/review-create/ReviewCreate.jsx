export default function ReviewCreate() {
    return (
        <>
            <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-700 mb-6">Add Your Review</h3>

                <form>
                    {/* Rating */}
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            className="w-full p-3 border border-gray-300 rounded-md mt-2"
                            placeholder="Rate this product (1-5)"
                            required
                        />
                    </div>

                    {/* Review */}
                    <div className="mb-4">
                        <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
                        <textarea
                            id="review"
                            name="review"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md mt-2"
                            placeholder="Enter your review"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </>
    );
}