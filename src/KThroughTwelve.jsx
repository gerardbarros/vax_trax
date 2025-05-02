import KtoSix from "./KToSix"
import SeventhGrade from "./SeventhGrade"
import EigthToTwelfth from "./EighthToTwelfth"
import './App.css'

export default function KThroughTwelve(){
    return (
        <div>
            <h1>Kindergarten to Sixth Grade</h1>
                <KtoSix />
            <hr />
            <h1>7th Grade</h1>
                <SeventhGrade />
            <hr />
            <h1>8th - 12th Grade</h1>
                <EigthToTwelfth />
        </div>
    )
}