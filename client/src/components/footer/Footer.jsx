import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-100 text-gray-700 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Left Section */}
                        <div>
                            <h3 className="text-xl font-bold text-green-700">E-Commerce Shop</h3>
                            <p className="text-sm mt-2">
                                Your one-stop shop for the latest electronics, accessories, and more.
                            </p>
                        </div>
                        {/* Center Section */}
                        <div>
                            <h4 className="text-lg font-semibold text-green-700">Quick Links</h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-green-700">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="text-gray-600 hover:text-green-700">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-green-700">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-green-700">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Right Section */}
                        <div>
                            <h4 className="text-lg font-semibold text-green-700">Contact</h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-600 hover:text-green-700"
                                    >
                                        support@ecommerce.com
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="text-gray-600 hover:text-green-700"
                                    >
                                        +1 234 567 89
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-600 hover:text-green-700">
                                        123 E-Commerce St, Shop City, EC 12345
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="text-center mt-6 border-t border-gray-300 pt-4">
                        <p className="text-sm text-gray-600">
                            © 2025 E-Commerce Shop. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
}