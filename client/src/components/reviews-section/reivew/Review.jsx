export default function Review() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold text-green-800">John Doe</h4>
                <span className="text-sm text-gray-600">Posted on: January 1, 2025</span>
            </div>
            <p className="text-gray-700 mb-4">
                This is an excellent product! It's everything I was looking for and more. The quality is top-notch, and it works perfectly. Highly recommend it!
            </p>
            <div className="flex space-x-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    );
}
