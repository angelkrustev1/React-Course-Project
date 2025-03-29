export default function ProductItem() {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* Item Image */}
            <img
                src="https://via.placeholder.com/300"
                alt="Item Image"
                className="w-full h-56 object-cover rounded-t-lg"
            />
            {/* Item Info */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-green-800 hover:text-green-600 transition duration-200">
                    Item Title
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    A brief description of the item goes here. This could be a few sentences
                    long. It gives the user enough info to want to click.
                </p>
                {/* Price */}
                <p className="text-2xl font-semibold text-green-700 mt-4">$99.99</p>
                {/* Button */}
                <button className="w-full mt-6 bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-200">
                    View Details
                </button>
            </div>
        </div>
    );
}
