import { Link } from "react-router";
import ProductsCatalog from "../products-cataog/ProductsCatalog";

export default function Home() {
    return (
        <section className="bg-gray-300 py-1">
            {/* Main Content */}
            <div className="container mx-auto px-6 text-center py-16">
                <h2 className="text-5xl font-extrabold text-green-800 mb-6 leading-tight tracking-tight">
                    Welcome to Our E-Commerce Shop
                </h2>
                <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Explore our exclusive range of top-quality products at unbeatable prices.
                    Enjoy a seamless shopping experience with the best deals curated just for you.
                    Start your journey with us today and make your shopping experience unforgettable!
                </p>


                {/* Start Shopping Button */}
                <Link
                    to="/products"
                    className="bg-green-600 text-white px-10 py-5 rounded-lg text-2xl font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                    <ProductsCatalog showSearch={false} />
                </div>
            </div>
        </section>
    );
}
