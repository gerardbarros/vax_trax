import './App.css'
import PreK from './PreK'

function App() {
  return (
    <>
      <h1>Vaccine Tracker</h1>
      <PreK />

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
