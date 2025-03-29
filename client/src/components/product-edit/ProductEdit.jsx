export default function ProductEdit() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
                        Create New Product
                    </h2>
                    <form>
                        {/* Name */}
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter product name"
                            required=""
                        />
                        <label htmlFor="category" className="block text-sm font-medium mt-3">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter product name"
                            required=""
                        />
                        {/* Price */}
                        <label htmlFor="price" className="block text-sm font-medium mt-3">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min={1}
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter product price"
                            required=""
                        />
                        {/* Quantity */}
                        <label htmlFor="quantity" className="block text-sm font-medium mt-3">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min={1}
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter product quantity"
                            required=""
                        />
                        {/* Image URL */}
                        <label htmlFor="imageURL" className="block text-sm font-medium mt-3">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="imageURL"
                            name="imageURL"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter image URL"
                            required=""
                        />
                        {/* Description */}
                        <label htmlFor="description" className="block text-sm font-medium mt-3">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter product description"
                            required=""
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}