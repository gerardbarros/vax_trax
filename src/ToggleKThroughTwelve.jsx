import { useState } from "react";
import KThroughTwelve from "./KThroughTwelve";

export default function ToggleKThroughTwelve(){
    const [isVisible, setIsVisible] = useState(false);
    const toggleKThroughTwelve = () => {
        setIsVisible(show => !show);
    };

    return (
    <div className="toggle-K12">
        <button 
        onClick={toggleKThroughTwelve}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4">

        {isVisible ? 'Hide' : 'Show'} K-12 Requirements
        </button>

        {isVisible && (
        <div className="bg-gray-100 p-4 rounded shadow">
            <KThroughTwelve />
        </div>
        )}
    </div>
    );
}