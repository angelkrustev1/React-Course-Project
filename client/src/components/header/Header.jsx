import { Link } from "react-router";
import useMobile from "./api/useMobile";
import Dropdown from "./dropdown/Dropdown";
import Navigation from "./navigation/Navigation";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
    const { isMobile } = useMobile();
    const { username } = useContext(UserContext)

    return (
        <header className="bg-green-700 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: Logo */}
                <h1 className="text-3xl font-semibold text-white">
                    <Link to="/" className="hover:underline">E-Commerce</Link>
                </h1>

                {/* Right Section: Email and Navigation */}
                <div className="flex items-center space-x-6">
                    {/* Email visible on all screen sizes */}
                    <span className="text-white hover:text-green-200 transition duration-300">{username}</span>

                    {/* Navigation or Dropdown */}
                    <div className="flex items-center">
                        {isMobile ? <Dropdown /> : <Navigation />}
                    </div>
                </div>
            </div>
        </header>
    );
}