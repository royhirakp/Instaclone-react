
import React from 'react';
import "./landing_page.css"
import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import ImageChangeMobileComponent from './ImageChangeMobileComponent';
export default function Landing_page() {

  const navigte = useNavigate();
  return (
    <>
      <h2>Landing Page: Instagram Clone</h2>
      <div id="cointainer_">
        <section id='image_'>
          <img src="./image/instagram-mobile-logo.JPG" alt='landing imge ' />
        </section>

        <section id='button_container_'>
          <div className='userInformation'>
            <div className="logoContainer">
              <img src="./image/insta-logo.JPG" alt='landing imge ' />
            </div>
            <div className="userDispalyPicContainer">
              <img src="./image/displaypic.jfif" alt='landing imge ' />

            </div>

            <div className="buttoonContainer">
              <button className='userLogin' onClick={() => navigte('/post')}> Continue as userID </button>
              <br />
              <button className='userremove'  > Remove Account</button>

            </div>

          </div>

          <div className="singup">
            <p>Not hirak21?</p>
            <p>
              <Link>Switch accounts</Link> or
              <Link>Sing Up</Link>
            </p>
          </div>

          <div className="gettheapp">
            <p>Get the app</p>
            <div className='imgContainer'>
              <div className="img1">
                <img src="./image/google-paly-logo.JPG" alt="" />
              </div>
              <div className="img2">
                <img src="./image/micrefoft-logo.JPG" alt="" />
              </div>
            </div>
          </div>

          {/* usenavigate is laginfg   .... link tag is working fast */}
        </section>

       

      </div>
      <div className='informationText'>
        <b>N.b:</b>
        This page is a copy of the original page(Only the UI) and does not have authorization and authentication functionalities. Only clicking on 'Continue as userID' will take you to the next page.
        </div>
        <ImageChangeMobileComponent/>
    </>
  );
}
