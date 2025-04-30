import VaccineCounter from "./VaccineCount"

export default function KtoSix(){
    return (
        <div className="ktosix-vaccines">
            <h2>Diphtheria / Tetanus / Pertussis (DTaP / DTP / DT / Td / Tdap)</h2>
                <p>4 - 5 doses. 4 doses is valid if 4th dose was received on or after 4th birthday.</p>
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
                <p>N/A</p>
                <VaccineCounter />
                <hr />
            <h2>Hepatitis A</h2>
                <p>2 doses</p>
                <VaccineCounter />
        </div>
    )
}