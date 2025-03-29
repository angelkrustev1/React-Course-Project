import { Link } from "react-router";
import ProductsCatalog from "../products-cataog/ProductsCatalog";

export default function Home() {
    return (
        <>
            <section className="bg-gray py-16">
                <div className="container mx-auto px-4 text-center">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-green-700 mb-6">
                        Welcome to E-Commerce Shop
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover the best products at unbeatable prices. Start shopping now!
                    </p>
                    {/* Call-to-Action Button */}
                    <Link
                        to="/products"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition duration-300"
                    >
                        Start Shopping
                    </Link>
                    {/* Featured Product Section */}
                    <ProductsCatalog />
                </div>
            </section>
        </>
    );
}
