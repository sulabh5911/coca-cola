import react from "react"
import "./page2.css"
import myimage from "./cocacola_logo.png"
import myimage2 from "./cocacola.png"
function Page2(){
    return(
        <>
        <div className="card">
            <div className="circle">
                <img src={myimage} className="logo"></img>
            </div>
            <img src={myimage2} className="i" ></img>
        </div>


        </>
    )
}

export default Page2