import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-green-700 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link 
                    to="/" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </section>
    );
}
