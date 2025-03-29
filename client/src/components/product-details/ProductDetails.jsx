import ReviewsSection from "../reviews-section/ReviewsSection";

export default function ProductDetails() {
    return (
        <>
            <section className="bg-gray-300 py-16">
                <div className="container mx-auto px-6">
                    {/* Product Details Section */}
                    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="lg:w-1/3 w-full">
                            <img
                                src="https://via.placeholder.com/600"
                                alt="Product Image"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Product Info Section */}
                        <div className="lg:w-2/3 w-full p-6">
                            {/* Product Title */}
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 mb-4">
                                Product Name
                            </h2>
                            
                            {/* Product Category */}
                            <p className="text-lg text-gray-700 mb-4">
                                <span className="font-semibold">Category: </span> Electronics
                            </p>
                            
                            {/* Product Price */}
                            <p className="text-2xl font-bold text-green-700 mb-4">${99.99}</p>

                            {/* Product Quantity */}
                            <p className="text-gray-700 mb-6">
                                Quantity Available: <span className="font-semibold">150</span>
                            </p>

                            {/* Product Description */}
                            <p className="text-lg text-gray-700 mb-6">
                                This is a brief description of the product. It explains its main features and why it's great for customers.
                            </p>

                            {/* Buy Button */}
                            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300">
                                Buy Now
                            </button>

                            {/* Buttons for Edit and Delete */}
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                                {/* Edit Button */}
                                <button
                                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                                    onClick={() => alert('Redirect to edit page')}
                                >
                                    Edit Product
                                </button>

                                {/* Delete Button */}
                                <button
                                    className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                                    onClick={() => alert('Confirm product deletion')}
                                >
                                    Delete Product
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Full Product Description Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-green-800 mb-4">Full Product Description</h3>
                        <p className="text-gray-700">
                            This product offers the best solution for your needs. With state-of-the-art technology and premium materials, it ensures durability and high performance. Whether you're buying it for personal use or as a gift, this product is designed to meet your expectations.
                        </p>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-12">
                        <ReviewsSection />
                    </div>
                </div>
            </section>
        </>
    );
}
