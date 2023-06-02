import React, { useState } from "react";
import "./landing_page.css";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import ImageChangeMobileComponent from "./ImageChangeMobileComponent";
export default function Landing_page() {
  const [detailsState, setDetailsState] = useState(false);
  const navigte = useNavigate();
  return (
    <>
      <h3
        onMouseLeave={() => setDetailsState(false)}
        onMouseEnter={() => setDetailsState(true)}
      >
        Landing Page: Instagram Clone{" "}
        <span>
          <u>
            <b>
              <i>( Hover here mouse for detailes)</i>
            </b>
          </u>
        </span>
      </h3>

      <div id="cointainer_">
        <section className="instaPageAnimationContainer">
          <ImageChangeMobileComponent />
        </section>
        <section id="button_container_">
          <div className="userInformation">
            <div className="logoContainer">
              <img src="./image/insta-logo.JPG" alt="landing imge " />
            </div>
            <div className="userDispalyPicContainer">
              <img src="./image/displaypic.jfif" alt="landing imge " />
            </div>

            <div className="buttoonContainer">
              <button className="userLogin" onClick={() => navigte("/post")}>
                Continue as userID{" "}
              </button>
              <br />
              <button className="userremove"> Remove Account</button>
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
            <div className="imgContainer">
              <div className="img1">
                <a
                  target="_blanck"
                  href="https://play.google.com/store/apps/details?id=com.instagram.android"
                >
                  <img src="./image/google-paly-logo.JPG" alt="" />
                </a>
              </div>
              <div className="img2">
                <a
                  href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT"
                  target="_blanck"
                >
                  <img src="./image/micrefoft-logo.JPG" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="informationText"
        style={{ display: `${detailsState ? "" : "none"}` }}
      >
        <b>N.b:</b>
        This page is a copy of the original page(Only the UI) and does not have
        authorization and authentication functionalities. Only clicking on
        'Continue as userID' will take you to the next page.
      </div>
    </>
  );
}
