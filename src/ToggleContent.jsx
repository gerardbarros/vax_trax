import { useState } from "react";
import PreK from "./PreK";

export default function TogglePreK(){
    const [isVisible, setIsVisible] = useState(false);
    const togglePreK = () => {
      setIsVisible(prev => !prev);
    };

  return (
    <div className="p-4">
      <button 
        onClick={togglePreK}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {isVisible ? 'Hide' : 'Show'} Childcare and Pre-K Requirements
      </button>

      {isVisible && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <PreK />
        </div>
      )}
    </div>
  );
}