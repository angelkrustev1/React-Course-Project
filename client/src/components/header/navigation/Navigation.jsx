import { Link } from "react-router";

export default function Navigation() {
    return (
        <>
            <nav className="hidden md:flex space-x-8 text-lg">
                <Link to="/products" className="text-green-700 hover:text-green-900">
                    Products
                </Link>
                <Link to="/login" className="text-green-700 hover:text-green-900">
                    Login
                </Link>
                <Link to="/register" className="text-green-700 hover:text-green-900">
                    Register
                </Link>
                <Link to="/logout" className="text-green-700 hover:text-green-900">
                    Logout
                </Link>
                <Link to="/products/add" className="text-green-700 hover:text-green-900">
                    Add Products
                </Link>
            </nav>
        </>
    );
}