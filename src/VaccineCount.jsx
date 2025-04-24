import React, { useState } from 'react'

const VaccineCounter = () => {
    const [count, setCount] = useState(0)
    const reset = () => setCount(0)

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10)
        if (!isNaN(value) && value >= 0) {
        setCount(value)
        } else if (e.target.value === '') {
        setCount(0) // Optional: Treat empty input as 0
        }
    };

    return (
        <div className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-white max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-3">Vaccine Count</h2>

        <input
            type="number"
            min="0"
            value={count}
            onChange={handleInputChange}
            className="w-24 text-center text-3xl font-bold text-blue-600 p-2 border border-gray-300 rounded mb-4"
        />


        <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1 px-4 rounded-xl"
        >
            Reset
        </button>
        </div>
    );
};

export default VaccineCounter;
