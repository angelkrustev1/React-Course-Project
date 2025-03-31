import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Profile() {
    const { username, email } = useContext(UserContext);

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6">
                {/* Profile Card */}
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 transform transition-all hover:scale-105 duration-300 ease-in-out relative z-10">
                    {/* User Avatar */}
                    <div className="flex justify-center mb-8">
                        <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex justify-center items-center p-2">
                            <img
                                src="/assets/no-profile.png"
                                alt="User Avatar"
                                className="w-28 h-28 rounded-full border-4 border-white object-cover transform transition-all hover:scale-110 duration-300"
                            />
                        </div>
                    </div>
                    {/* User Info */}
                    <div className="text-center">
                        <h2 className="text-5xl font-playfair font-semibold text-gray-800 mb-3 tracking-wider">{username}</h2>
                        <p className="text-lg text-gray-600 mb-6 italic">Premium Member</p>
                        <div className="space-y-2">
                            <p className="text-gray-700 text-xl">
                                <strong className="text-green-600 font-medium">Email:</strong>{" "}
                                <span className="text-gray-500">{email}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
