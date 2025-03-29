import useForm from "../../hooks/useForm";
import useLogin from "./api/useLogin";

export default function Login() {
    const { initialValues, login } = useLogin();
    const { pending, values, changeHandler, submitHandler } = useForm(login, initialValues);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300 px-4">
            <div className="bg-white px-8 py-6 rounded-lg shadow-lg w-full max-w-sm sm:w-96">
                <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
                <form className="mt-4 space-y-4" onSubmit={submitHandler}>
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter your email"
                            required
                            onChange={changeHandler}
                            value={values.email}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-green-300"
                            placeholder="Enter your password"
                            required
                            onChange={changeHandler}
                            value={values.password}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
                        disabled={pending}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
