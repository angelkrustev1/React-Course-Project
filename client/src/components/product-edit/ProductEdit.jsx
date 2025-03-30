import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import useProductEdit from "./api/useProductEdit";

const productsUrl = 'http://localhost:3030/data/products';

export default function ProductEdit() {
    const { productId } = useParams();
    const { initialValues, edit } = useProductEdit();
    const { pending: isFetchPending, state: product } = useFetch(`${productsUrl}/${productId}`)
    const {
        pending: isFormPending,
        values,
        changeHandler,
        submitHandler
    } = useForm(edit, product || initialValues, { productId })

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 px-4">
            <div className="bg-white px-6 py-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
                    Edit Product
                </h2>
                <form className="space-y-4" onSubmit={submitHandler}>
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter product name"
                            required
                            value={values.name || ''}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter product category"
                            required
                            value={values.category || ''}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min={1}
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter product price"
                            required
                            value={values.price || 1}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min={1}
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter product quantity"
                            required
                            value={values.quantity || 1}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="imageURL"
                            name="imageURL"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter image URL"
                            required
                            value={values.imageUrl || ''}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter product description"
                            required
                            value={values.description || ''}
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
                        disabled={isFormPending}
                    >
                        Edit Product
                    </button>
                </form>
            </div>
        </div>
    );
}
