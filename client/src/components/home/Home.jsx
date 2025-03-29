import { Link } from "react-router";
import ProductsCatalog from "../products-cataog/ProductsCatalog";

export default function Home() {
    return (
        <section className="bg-gray-300 py-16">
            {/* Main Content */}
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-green-700 mb-6">
                    Welcome to E-Commerce Shop
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
                    Discover the best products at unbeatable prices. Start shopping now and enjoy a seamless shopping experience with us!
                </p>

                {/* Start Shopping Button */}
                <Link
                    to="/products"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Start Shopping
                </Link>
            </div>

            {/* Featured Products Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
                    Featured Products
                </h3>
                <div className="container mx-auto px-6">
                    <ProductsCatalog />
                </div>
            </div>
        </section>
    );
}
