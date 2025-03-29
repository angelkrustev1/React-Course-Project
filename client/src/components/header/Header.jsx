import { Link } from "react-router";
import useMobile from "./api/useMobile";
import Dropdown from "./dropdown/Dropdown";
import Navigation from "./navigation/Navigation";

export default function Header() {
    const { isMobile } = useMobile();

    return (
        <>
            <header className="bg-green-100 shadow-md p-5">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-green-700">
                        <Link to="/" className="hover:underline">E-Commerce</Link>
                    </h1>


                    {isMobile ? <Dropdown /> : <Navigation />}
                </div>
            </header>
        </>
    );
}