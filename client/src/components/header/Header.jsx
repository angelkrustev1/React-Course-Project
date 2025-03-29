import { Link } from "react-router";
import useMobile from "./api/useMobile";
import Dropdown from "./dropdown/Dropdown";
import Navigation from "./navigation/Navigation";

export default function Header() {
    const { isMobile } = useMobile();

    return (
        <header className="bg-green-700 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl font-semibold text-white">
                    <Link to="/" className="hover:underline">E-Commerce</Link>
                </h1>

                {/* Navigation for desktop and dropdown for mobile */}
                {isMobile ? <Dropdown /> : <Navigation />}
            </div>
        </header>
    );
}
