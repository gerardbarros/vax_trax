import VaccineCounter from "./VaccineCount"

export default function EigthToTwelfth(){
    return (
        <div>
            <h2>Diphtheria / Tetanus / Pertussis (DTaP / DTP / DT / Td / Tdap)</h2>
                <p>3 dose primary series and 1 booster dose of tdap / td within the last 10 years</p>
                <p>1 dose of Tdap is required if at when 10 years have passed since the last dose of tetanus-containing vaccine</p>
                <VaccineCounter />
                <hr />
            <h2>Polio</h2>
                <p>3 - 4 doses. 3 doses is valid if 4th dose was received on or after 4th birthday.</p>
                <VaccineCounter />
                <hr />
            <h2>Measle, Mumps, and Rubella (MMR)</h2>
                <p>2 doses</p>
                <VaccineCounter />
                <hr />
            <h2>Hepatitis B</h2>
                <p>3 doses</p>
                <VaccineCounter />
                <hr />
            <h2>Varicella</h2>
                <p>2 doses</p>
                <VaccineCounter />
                <hr />
            <h2>Meningococcal (MCV4)</h2>
                <p>1 dose needed on or after the student's 11th birthday</p>
                <VaccineCounter />
                <hr />
            <h2>Hepatitis A</h2>
                <p>2 doses</p>
                <VaccineCounter />
                <hr />
        </div>
    )
}