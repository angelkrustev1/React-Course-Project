import { Link } from "react-router";

export default function ProductItem({
    _id,
    name,
    imageUrl,
    description,
    price,
}) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* Item Image */}
            <img
                src={imageUrl}
                alt="Item Image"
                className="w-full h-56 object-cover rounded-t-lg"
            />
            {/* Item Info */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-green-800 hover:text-green-600 transition duration-200">
                    {name}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {description && description.slice(0, 35)}...
                </p>
                {/* Price */}
                <p className="text-2xl font-semibold text-green-700 mt-4">${price}</p>
                {/* Button */}
                <Link
                    to={`/products/${_id}/details`}
                    className="w-full sm:w-auto mx-auto mt-6 bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-200 flex justify-center items-center"
                >
                    See More
                </Link>
            </div>
        </div>
    );
}
