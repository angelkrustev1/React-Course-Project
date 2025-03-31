import useForm from "../../hooks/useForm";
import useLogin from "./api/useLogin";

export default function Login() {
    const { initialValues, login } = useLogin();
    const { pending, values, changeHandler, submitHandler } = useForm(login, initialValues);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 px-4">
            <div className="bg-white px-8 py-8 rounded-3xl shadow-2xl w-full max-w-sm sm:w-96">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">Login</h2>
                <form className="space-y-6" onSubmit={submitHandler}>
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                            placeholder="Enter your email"
                            required
                            onChange={changeHandler}
                            value={values.email}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                            placeholder="Enter your password"
                            required
                            onChange={changeHandler}
                            value={values.password}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
                        disabled={pending}
                    >
                        {pending ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
