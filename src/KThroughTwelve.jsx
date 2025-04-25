import KtoSix from "./KToSix"
import SeventhGrade from "./SeventhGrade"
import EigthToTwelfth from "./EighthToTwelfth"
import VaccineCounter from "./VaccineCount"

export default function KThroughTwelve(){
    return (
        <div>
            {/* <h1>Kindergarten to 12th Grade</h1> */}
            <h1>Kindergarten to Sixth Grade</h1>
                <KtoSix />
                <hr />
            <h1>7th Grade</h1>
                <SeventhGrade />
                <VaccineCounter />
                <hr />
            <h1>8th - 12th Grade</h1>
                <EigthToTwelfth />
                <VaccineCounter />
        </div>
    )
    //K - 6
    //7th
    //8th
}