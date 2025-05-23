import useForm from "../../hooks/useForm";
import useProductCreate from "./api/useProductCreate";

export default function ProductCreate() {
    const { initialValues, create } = useProductCreate();
    const { pending, values, changeHandler, submitHandler } = useForm(create, initialValues)

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 px-4">
            <div className="bg-white px-6 py-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center text-green-800 mb-4">
                    Create New Product
                </h2>
                <form className="space-y-4" onSubmit={submitHandler}>
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter product name"
                            required={true}
                            value={values.name || ''}
                            onChange={changeHandler}
                            maxLength={25}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-800 mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter product category"
                            required
                            value={values.category || ''}
                            onChange={changeHandler}
                            maxLength={50}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-800 mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min={1}
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter product price"
                            required
                            value={values.price || 1}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-800 mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min={1}
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter product quantity"
                            required
                            value={values.quantity || 1}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="imageURL" className="block text-sm font-medium text-gray-800 mb-2">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter image URL"
                            required
                            value={values.imageUrl || ''}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-800 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-200"
                            placeholder="Enter product description"
                            required
                            value={values.description || ''}
                            onChange={changeHandler}
                            maxLength={400}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-200"
                        disabled={pending}
                    >
                        {pending ? "Adding Product..." : "Add Product"}
                    </button>
                </form>
            </div>
        </div>
    );
}
