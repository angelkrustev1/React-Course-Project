import { Link, useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ReviewsSection from "../reviews-section/ReviewsSection";
import Spiner from "../spiner/Spiner";
import useFetch from "../../hooks/useFetch";
import useProductDelete from "./api/useProductDelete";

const baseUrl = 'http://localhost:3030/data/products';

export default function ProductDetails() {
    const { productId } = useParams();
    const { _id: userId } = useContext(UserContext);
    const { deleteProduct } = useProductDelete();
    const { pending, state: product } = useFetch(`${baseUrl}/${productId}`);

    if (pending) {
        return (
            <div className="flex justify-center items-center py-16">
                <Spiner /> {/* Show the spinner while data is loading */}
            </div>
        );
    }

    return (
        <>
            <section className="bg-gray-300 py-16">
                <div className="container mx-auto px-6">
                    {/* Product Details Section */}
                    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="lg:w-1/3 w-full">
                            <img
                                src={product.imageUrl}
                                alt="Product Image"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Product Info Section */}
                        <div className="lg:w-2/3 w-full p-6">
                            {/* Product Title */}
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 mb-4">
                                {product.name}
                            </h2>

                            {/* Product Category */}
                            <p className="text-lg text-gray-700 mb-4">
                                <span className="font-semibold">Category: </span> {product.category}
                            </p>

                            {/* Product Price */}
                            <p className="text-2xl font-bold text-green-700 mb-4">${product.price}</p>

                            {/* Product Quantity */}
                            <p className="text-gray-700 mb-6">
                                Quantity Available: <span className="font-semibold">{product.quantity}</span>
                            </p>

                            {/* Product Description */}
                            <p className="text-lg text-gray-700 mb-6">
                                {product.description && product.description.slice(0, 130)}
                            </p>

                            {/* Buy Button */}
                            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300">
                                Buy Now
                            </button>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                                {product._ownerId === userId && (
                                    <>
                                        <Link
                                            to={`/products/${product._id}/edit`}
                                            className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
                                        >
                                            Edit Product
                                        </Link>

                                        <button
                                            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                                            onClick={() => deleteProduct(productId)}
                                        >
                                            Delete Product
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Full Product Description Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-green-800 mb-4">Full Product Description</h3>
                        <p className="text-gray-700">
                            {product.description}
                        </p>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-12">
                        <ReviewsSection productId={productId} />
                    </div>
                </div>
            </section>
        </>
    );
}
