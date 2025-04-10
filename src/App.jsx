import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vaccine Tracker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Check this link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-15.pdf">for early childhood and Pre-K requirements</a> 
        <br /> This link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-14.pdf">for K-12 requirements</a>. 
        <br />Full information can be found <a href="https://www.dshs.texas.gov/immunizations/school/requirements">here</a> on the official Texas Department of State Health Services.
        <br /> This site is not affiliated with Texas Department of State Health Services.
      </p>
    </>
  )
}

export default App
