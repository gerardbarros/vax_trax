import PreKDtap from "./PreKDtap"
import PreKPolio from "./PreKPolio"
import PreKHepA from "./PreKHepA"
import PreKHepB from "./PreKHepB"
import PreKHib from "./PreKHib"
import PreKPCV from "./PreKPCV"
import PreKMMR from "./PreKMMR"
import PreKVaricella from "./PreKVaricella"
import VaccineCounter from "./VaccineCount"
import './App.css'


export default function PreK(){
    return (
    <div className="prek-vaccines">
        <h1>Childcare and Pre-K Facilities</h1>
            <PreKDtap />
            <VaccineCounter />
            <PreKPolio />
            <PreKHepB />
            <PreKHib />
            <PreKPCV />
            <PreKMMR />
            <PreKVaricella />
            <PreKHepA />
    </div>
    )
}