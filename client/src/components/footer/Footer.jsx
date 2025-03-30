import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
                {/* Left Section */}
                <div>
                    <h3 className="text-3xl font-semibold text-green-500 mb-6">E-Commerce Shop</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Explore the best products at unbeatable prices. Get the latest electronics, accessories, and more, all in one place.
                    </p>
                </div>

                {/* Center Section */}
                <div>
                    <h4 className="text-xl font-semibold text-green-500 mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h4 className="text-xl font-semibold text-green-500 mb-6">Contact</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to="#" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                support@ecommerce.com
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                +1 234 567 89
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-300 hover:text-green-500 transition duration-300 ease-in-out">
                                123 E-Commerce St, Shop City, EC 12345
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-10 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                    © 2025 E-Commerce Shop. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
