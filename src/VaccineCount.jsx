import React, { useState } from 'react'

export default function VaccineCounter(){
    const [count, setCount] = useState(0)
    const reset = () => setCount(0)

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10)
        if (!isNaN(value) && value >= 0) {
        setCount(value)
        } else if (e.target.value === '') {
        setCount(0)
        }
    };

    return (
        <div>
        <h2>Vaccine Count</h2>

        <input
            type="number"
            min="0"
            value={count}
            onChange={handleInputChange}
            
        />


        <button onClick={reset}>
            Reset
        </button>
        </div>
    );
};