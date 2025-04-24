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
            <hr/>
            <PreKPolio />
            <VaccineCounter />
            <hr/>
            <PreKHepB />
            <VaccineCounter />
            <hr/>
            <PreKHib />
            <VaccineCounter />
            <hr/>
            <PreKPCV />
            <VaccineCounter />
            <hr/>
            <PreKMMR />
            <VaccineCounter />
            <hr/>
            <PreKVaricella />
            <VaccineCounter />
            <hr/>
            <PreKHepA />
            <VaccineCounter />
    </div>
    )
}