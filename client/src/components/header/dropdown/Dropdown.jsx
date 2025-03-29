import { Link } from "react-router";
import useToggled from "../../../hooks/useToggled";

export default function Dropdown() {
    const { isToggled, toggledHandler } = useToggled();

    return (
        <div className="relative">
            <button
                id="menu-toggle"
                className="text-green-700 focus:outline-none text-xl"
                onClick={toggledHandler}
            >
                ☰
            </button>
            {isToggled && (
                <div
                    id="mobile-menu"
                    className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-lg"
                >
                    <Link to="/products" className="block px-5 py-3 text-green-700 hover:bg-green-200">Products</Link>
                    <Link to="/login" className="block px-5 py-3 text-green-700 hover:bg-green-200">Login</Link>
                    <Link to="/register" className="block px-5 py-3 text-green-700 hover:bg-green-200">Register</Link>
                    <Link to="/logout" className="block px-5 py-3 text-green-700 hover:bg-green-200">Logout</Link>
                    <Link to="/products/add" className="block px-5 py-3 text-green-700 hover:bg-green-200">Add Item</Link>
                </div>
            )}
        </div>
    );
}
