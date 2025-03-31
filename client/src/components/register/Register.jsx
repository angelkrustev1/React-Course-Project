import useForm from "../../hooks/useForm";
import useRegister from "./api/useRegister";

export default function Register() {
    const { initialValues, register } = useRegister();
    const { pending, values, changeHandler, submitHandler, error } = useForm(register, initialValues);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-gray-300 px-4">
            <div className="bg-white px-8 py-8 rounded-3xl shadow-2xl w-full max-w-sm sm:w-96">
                <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">Register</h2>
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

                    {/* Username Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                            placeholder="Enter your username"
                            required
                            onChange={changeHandler}
                            value={values.username}
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

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirm"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                            placeholder="Confirm your password"
                            required
                            onChange={changeHandler}
                            value={values.confirm}
                        />
                    </div>

                    {/* Error and Success Messages */}
                    {error && <p className="text-red-600 text-center">{error}</p>}

                    {/* Register Button */}
                    <button
                        className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
                        disabled={pending}
                    >
                        {pending ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}
