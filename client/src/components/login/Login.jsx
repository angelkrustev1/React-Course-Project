export default function Login() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
                    <form className="mt-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter your email"
                            required=""
                        />
                        <label className="block text-sm font-medium mt-3">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter your password"
                            required=""
                        />
                        <button className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>

    );
}