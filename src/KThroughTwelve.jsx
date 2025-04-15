import KtoSix from "./KToSix"
import SeventhGrade from "./SeventhGrade"
import EigthToTwelfth from "./EighthToTwelfth"

export default function KThroughTwelve(){
    return (
        <div>
            {/* <h1>Kindergarten to 12th Grade</h1> */}
            <h1>Kindergarten to Sixth Grade</h1>
                <KtoSix />
            <h1>7th Grade</h1>
                <SeventhGrade />
            <h1>8th - 12th Grade</h1>
                <EigthToTwelfth />

        </div>
    )
    //K - 6
    //7th
    //8th
}