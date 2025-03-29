export default function Register() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 px-4">
            <div className="bg-white px-8 py-6 rounded-lg shadow-lg w-full max-w-sm sm:w-96">
                <h2 className="text-2xl font-bold text-center text-green-700">
                    Register
                </h2>
                <form className="mt-4 space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
