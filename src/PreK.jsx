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
    <div>
        <h1>Childcare and Pre-K Facilities</h1>
        <div className="prek-vaccines">
            <PreKDtap /> 
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKPolio />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKHepB />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKHib />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKPCV />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKMMR />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKVaricella />
            <VaccineCounter />
        </div>
        <hr/>
        <div className="prek-vaccines">
            <PreKHepA />
            <VaccineCounter />
        </div>
    </div>
    )
}