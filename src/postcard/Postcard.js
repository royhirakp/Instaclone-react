
// import testcard from "../image/10x.png"
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs"
import "./Postcard.css"

const Postcard = (props)=>{
    // console.log(props.data)
 
    const {author,location,like,description,image,Date}= props.data;
    // Date = Date.split('T')[0]
    let FormatDate = Date.split('T')[0]
    // console.log(typeof(Date),"<=====type of  datae")
    // console.log(Date.split('T')[0])

    const base64Str = btoa(
        String.fromCharCode(...new Uint8Array((image?.data.data)))
    )

    return (
        <>
            <div id="cointainrer">
                <header>
                    {/* <img src="./image/10x.png"/> */}
                    <section id="name_place">
                            <p><b>{author}</b></p>
                            <p>{location}</p>
                    </section>
                    <section id="option_icon">
                        ...
                    </section>
                </header>
                <section id="image">
                    {/* <img src={PostImage} alt="10x pic"/> */}
                    <img src={`data:image/png;base64,${base64Str}`} alt="" />
                </section>

                <section id="like_share_date">
                    <div id="like_shair"><AiOutlineHeart/> <span><BsFillArrowUpRightSquareFill/></span> </div>
                    <div id="date">{`${FormatDate}`}</div>
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