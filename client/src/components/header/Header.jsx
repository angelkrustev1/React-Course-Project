import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Dropdown from "./dropdown/Dropdown";
import Navigation from "./navigation/Navigation";
import useMobile from "./api/useMobile";

export default function Header() {
    const { isMobile } = useMobile();

    return (
        <header className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: Logo */}
                <h1 className="text-4xl font-bold text-white tracking-wider">
                    <Link to="/" className="hover:text-green-300 transition-colors duration-300">
                        E-Commerce
                    </Link>
                </h1>

                {/* Right Section: Navigation */}
                <div className="flex items-center space-x-6">
                    {/* Navigation or Dropdown */}
                    <div className="flex items-center">
                        {isMobile ? <Dropdown /> : <Navigation />}
                    </div>
                </div>
            </div>
        </header>
    );
}
