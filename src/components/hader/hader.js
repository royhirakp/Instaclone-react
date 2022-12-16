// import useState from "react"
import { Link } from "react-router-dom";
// import icon from ""
// import camera from "../../image/camera.png"
import "./hader.css"
const Hader = ()=>{
    return (
        <>
        <nav>
            <section id="icon">
                <img src="./image/instaC.png" alt="logo"/>
            </section>
            <section id="camera">
                
                {/* <Link to='create'>
                <img src="./image/camera.png" alt="logo"/>
                </Link> */}

                <Link to ="/create">
                    <img src="./image/camera.png" alt="logo"/>
                </Link>
                
            </section>
        </nav>
        </>
    )
}
export default Hader;