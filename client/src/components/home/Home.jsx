import { Link } from "react-router";
import ProductsCatalog from "../products-cataog/ProductsCatalog";

export default function Home() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-green-700 mb-6">
                    Welcome to E-Commerce Shop
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                    Discover the best products at unbeatable prices. Start shopping now and enjoy a seamless shopping experience with us!
                </p>
                <Link
                    to="/products"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Start Shopping
                </Link>

                {/* Featured Product Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-green-700 mb-6">
                        Featured Products
                    </h3>
                    <ProductsCatalog />
                </div>
            </div>
        </section>
    );
}
