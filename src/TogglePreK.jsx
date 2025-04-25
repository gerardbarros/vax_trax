import { useState } from "react"
import PreK from "./PreK"


export default function TogglePreK(){
    const [isVisible, setIsVisible] = useState(false);
    const togglePreK = () => {
      setIsVisible(show => !show);
    };

  return (
    <div className="toggle-PreK">
      <button 
        onClick={togglePreK}
        className="prek-button">
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