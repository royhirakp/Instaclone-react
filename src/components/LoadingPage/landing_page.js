
import React from 'react';
import "./landing_page.css"
//  import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Landing_page() {
  
  // const navigte = useNavigate();
  return (
    <>
    <h2>Landing Page</h2>
    <div id="cointainer_">
        <section id='image_'>
            <img src="./image/startimg.JPG" alt='landing imge '/>
        </section>

        <section id='button_container_'>
            <div id='button-div_'>
                <div>
                <h3>10x Team 04</h3>
                {/* <button onClick={()=>navigte('post',{replace:true})}>Enter</button> */}
                <button > <Link to="post">Enter</Link></button>
                {/* usenavigate is laginfg   .... link tag is working fast */}
                </div>  
            </div>
        </section>

    </div>
    </>
  );
}
