import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export default function Navigation() {
    const { accessToken } = useContext(UserContext)

    return (
        <nav className="hidden md:flex space-x-8 text-lg">
            {/* Navigation links */}
            <Link to="/products" className="text-white hover:text-green-200 transition duration-300">
                Products
            </Link>
            {accessToken
                ? (
                    <>  
                        <Link to="/products/add" className="text-white hover:text-green-200 transition duration-300">
                            Add Products
                        </Link>
                        <Link to="/logout" className="text-white hover:text-green-200 transition duration-300">
                            Logout
                        </Link>
                    </>
                )
                : (
                    <>
                        <Link to="/login" className="text-white hover:text-green-200 transition duration-300">
                            Login
                        </Link>
                        <Link to="/register" className="text-white hover:text-green-200 transition duration-300">
                            Register
                        </Link>
                    </>
                )
            }
        </nav>
    );
}
