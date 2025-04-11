import PreKDtap from "./PreKDtap"
import PreKPolio from "./PreKPolio"
import PreKHepA from "./PreKHepA"

export default function PreK(){
    return (
    <div>
        <h1>Childcare and Pre-K Facilities</h1>
            <PreKDtap />
            <PreKPolio />

        <h2>Hepatitis B (HepB)</h2>

        <h2>Haemophilus influenzae type b (Hib) </h2>

        <h2>Pneumococcal conjugate vaccine (PCV) </h2>

        <h2>Measles, Mumps and Rubella (MMR) </h2>

        <h2>Varicella</h2>

            <PreKHepA />

    </div>
    )
}