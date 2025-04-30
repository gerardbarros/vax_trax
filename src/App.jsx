import './App.css'
import TogglePreK from './TogglePreK'
import ToggleKThroughTwelve from './ToggleKThroughTwelve'
import JumpToTop from './JumpToTop.jsx'


function App() {
  return (
    <>
      <h1>Vaccine Tracker</h1>
      <TogglePreK />
      <ToggleKThroughTwelve />
      
      <JumpToTop />
      

      <footer>
        <p className="disclaimer">
          Check this link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-15.pdf" target="_blank">for early childhood and Pre-K requirements</a> 
          <br /> This link: <a href="https://www.dshs.texas.gov/sites/default/files/LIDS-Immunizations/pdf/pdf_stock/6-14.pdf" target="_blank">for K-12 requirements</a>. 
          <br />Full information can be found <a href="https://www.dshs.texas.gov/immunizations/school/requirements" target="_blank">here</a> on the official Texas Department of State Health Services.
          <br /> <strong>This site is not affiliated with Texas Department of State Health Services.</strong>
        </p>
      </footer>
      
    </>
  )
}

export default App
