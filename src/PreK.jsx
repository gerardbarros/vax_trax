import PreKDtap from "./PreKDtap"
import PreKPolio from "./PreKPolio"
import PreKHepA from "./PreKHepA"
import PreKHepB from "./PreKHepB"
import PreKHib from "./PreKHib"
import PreKPCV from "./PreKPCV"
import PreKMMR from "./PreKMMR"
import PreKVaricella from "./PreKVaricella"

export default function PreK(){
    return (
    <div>
        <h1 className="Pre-K">Childcare and Pre-K Facilities</h1>
            <PreKDtap />
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