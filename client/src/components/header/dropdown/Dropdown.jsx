import { Link } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { accessToken } = useContext(UserContext)

    return (
        <div className="relative">
            {/* Button to toggle dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-xl"
            >
                ☰
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-green-800 text-white rounded-lg shadow-lg">
                    <Link to="/products" className="block px-4 py-2 hover:bg-green-600">
                        Products
                    </Link>
                    {accessToken
                        ? (
                            <>
                                <Link to="/logout" className="block px-4 py-2 hover:bg-green-600">
                                    Logout
                                </Link>
                                <Link to="/products/add" className="block px-4 py-2 hover:bg-green-600">
                                    Add Products
                                </Link>
                            </>
                        )
                        : (
                            <>
                                <Link to="/login" className="block px-4 py-2 hover:bg-green-600">
                                    Login
                                </Link>
                                <Link to="/register" className="block px-4 py-2 hover:bg-green-600">
                                    Register
                                </Link>
                            </>
                        )
                    }
                </div>
            )}
        </div>
    );
}
