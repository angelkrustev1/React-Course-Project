export default function ProductItem() {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Item Image */}
                <img
                    src="https://via.placeholder.com/300"
                    alt="Item Image"
                    className="w-full h-48 object-cover"
                />
                {/* Item Info */}
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-700">Item Title</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        A brief description of the item goes here. This could be a few sentences
                        long.
                    </p>
                    <p className="text-lg font-bold text-green-700 mt-4">$99.99</p>
                    {/* Button */}
                    <button className="w-full mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
                        View Details
                    </button>
                </div>
            </div>
        </>
    );
}