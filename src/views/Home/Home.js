import "./../Home/Home.css"
import Studentcard from "../../components/StudentCard/StudentCard"
import studentimg1 from "./../../components/StudentCard/img/std1.jpg"
import studentimg2 from "./../../components/StudentCard/img/std2.jpg"
import studentimg3 from "./../../components/StudentCard/img/std3.jpg"

const Home = () => {
    return (
        <>
        <h1>Zoom App</h1>

        <div className="Student-card-container">
        <Studentcard
         StudentName= "Prapti"
         StudentImage = {studentimg1}
         MicState={true}
         />

        <Studentcard 
        StudentName= "Shreyash"
        StudentImage = {studentimg2}
        MicState={false}
        />

        <Studentcard 
        StudentName= "Vidhi"
        StudentImage = {studentimg3}
        MicState={false}
        />
        </div>
        </>
    )

}

export default Home