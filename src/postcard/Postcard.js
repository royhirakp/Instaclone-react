
// import testcard from "../image/10x.png"
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs"

import "./Postcard.css"

const Postcard = (props)=>{
 
    const {name,location,like,description,PostImage,date}= props.data;

    return (
        <>
            <div id="cointainrer">
                <header>
                    {/* <img src="./image/10x.png"/> */}
                    <section id="name_place">
                            <p><b>{name}</b></p>
                            <p>{location}</p>
                    </section>
                    <section id="option_icon">
                        ...
                    </section>
                </header>
                <section id="image">
                    <img src={PostImage} alt="10x pic"/>
                </section>

                <section id="like_share_date">
                    <div id="like_shair"><AiOutlineHeart/> <span><BsFillArrowUpRightSquareFill/></span> </div>
                    <div id="date">{date}</div>
                </section>
                <section id="no_of_like">
                   {`${like} likes`}
                </section>
                <footer id="describtion">
                    <b>{description}</b>
                </footer>
            </div>
        </>
    )
}
export default Postcard;