import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export default function Navigation() {
    const { accessToken } = useContext(UserContext);

    return (
        <nav className="hidden md:flex space-x-8 text-lg items-center">
            {/* Navigation links */}
            <Link
                to="/products"
                className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
            >
                Products
            </Link>
            {accessToken ? (
                <>
                    <Link
                        to="/products/add"
                        className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
                    >
                        Add Products
                    </Link>
                    <Link
                        to="/profile"
                        className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
                    >
                        Profile
                    </Link>
                    <Link
                        to="/logout"
                        className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
                    >
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to="/login"
                        className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-white hover:text-green-300 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
                    >
                        Register
                    </Link>
                </>
            )}
        </nav>
    );
}
