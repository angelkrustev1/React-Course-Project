import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-300 p-6">
            <div className="text-center space-y-6">
                <h1 className="text-8xl font-black text-green-700 drop-shadow-md">404</h1>
                <h2 className="text-3xl font-bold text-gray-800">Oops! Page Not Found</h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                    The page you're looking for doesn't exist or may have been moved.
                </p>
                <Link 
                    to="/" 
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-green-700 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </section>
    );
}
