import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import useReviewDelete from "./api/useReviewDelete";
import formatDateTimestamp from "../../../utils/formatDateTimestamp";

export default function Review({
    _id: reviewId,
    rating,
    comment,
    author,
    _createdOn,
    _ownerId,
    onDelete,
}) {
    const { _id } = useContext(UserContext);
    const { deleteReview } = useReviewDelete(onDelete, _ownerId);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto border border-gray-200">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold text-green-800">{author}</h4>
                <span className="text-sm text-gray-600">Posted on: {formatDateTimestamp(_createdOn)}</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-4 leading-relaxed">
                {comment}
            </p>

            {/* Rating and Delete Button */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-bold-green-500 text-lg">{rating}/5⭐</span>

                {/* Delete Button */}
                {_id === _ownerId && (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                        onClick={() => deleteReview(reviewId)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
