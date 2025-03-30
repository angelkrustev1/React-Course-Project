import useForm from "../../../hooks/useForm";
import useReviewCreate from "./api/useReviewCreate";

export default function ReviewCreate({
    productId,
    username,
    onCreate
}) {
    const { initialValues, create } = useReviewCreate();
    const { pending, values, changeHandler, submitHandler } = useForm(create, initialValues, {
        productId, username, onCreate
    })

    return (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Add Your Review</h3>

            <form onSubmit={submitHandler}>
                {/* Rating */}
                <div className="mb-6">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-800">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min={1}
                        max={5}
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Rate this product (1-5)"
                        required
                        onChange={changeHandler}
                        value={values.rating}
                    />
                </div>

                {/* Review */}
                <div className="mb-6">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-800">Your Review</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your review"
                        required
                        onChange={changeHandler}
                        value={values.comment}
                        maxLength={250}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                    disabled={pending}
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}
