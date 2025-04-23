import './App.css'
import PreK from './PreK'
import KThroughTwelve from './KThroughTwelve'
import ToggleContent from './ToggleContent'
import { useState } from 'react'

function App() {
  const [viewPreK, setViewPreK] = useState(true)
  // const changeViewPreK = () => {
  //   setViewPreK(!viewPreK)
  //   // if viewPreK is false return Pre-K as hidden, if true, show the values
  //   // .hide-prek-vaccines || .show-prek-vaccines depending on the button click
  // }
  
  

  return (
    <>
      <h1>Vaccine Tracker</h1>
      {/* Add function  that is able to expand/collapse Pre-K or K-12 sections. Use state needed to show/hide; also needed for the vax records */}
      {/* <button onClick={changeViewPreK}>{viewPreK ? "Show Pre-K " : "Hide Pre-K"}</button> */}
      <ToggleContent />
      {/* <PreK /> */}
      {/* <button onClick={changeView}>{view ? "Show K-12" : "Hide K-12"}</button> */}
      <KThroughTwelve />
      

      <footer>
        <p className="read-the-docs">
          Check this link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-15.pdf">for early childhood and Pre-K requirements</a> 
          <br /> This link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-14.pdf">for K-12 requirements</a>. 
          <br />Full information can be found <a href="https://www.dshs.texas.gov/immunizations/school/requirements">here</a> on the official Texas Department of State Health Services.
          <br /> This site is not affiliated with Texas Department of State Health Services.
        </p>
      </footer>
    </>
  )
}

export default App
