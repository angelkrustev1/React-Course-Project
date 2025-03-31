import { Link } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { accessToken } = useContext(UserContext);

    return (
        <div className="relative">
            {/* Button to toggle dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl hover:text-green-300 transition-all duration-200"
            >
                <span className="block w-8 h-1 bg-white mb-2"></span>
                <span className="block w-8 h-1 bg-white mb-2"></span>
                <span className="block w-8 h-1 bg-white"></span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-xl z-10 p-3 transform transition-all duration-200 ease-in-out">
                    <div className="space-y-2">
                        <Link
                            to="/products"
                            className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                        >
                            Products
                        </Link>

                        {accessToken ? (
                            <>
                                <Link
                                    to="/products/add"
                                    className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Add Products
                                </Link>
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/logout"
                                    className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="block px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
