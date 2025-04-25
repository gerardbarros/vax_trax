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
        className="ktwelve-button">

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