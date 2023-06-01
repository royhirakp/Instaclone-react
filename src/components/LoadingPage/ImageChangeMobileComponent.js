import React, { useEffect, useState } from "react";
import "./landing_page.css";
const ImageChangeMobileComponent = () => {
  let [imageNo, setImageNo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImageNo((pre) => {
        if (pre > 4) {
          return 0;
        }
        return pre + 1;
      });
    }, 4000);
  }, []);
  return (
    <>
      <div id="instaMobileeImageMainContainer">
        <section id="image_">
          <img src="./image/instagram-mobile-logo.JPG" alt="landing imge " />
        </section>

        <div className="Divtest">
          <img
            className="imageTagChangephoto"
            src={`./mobiledisplayChangeImages/tempsnip${imageNo}.png`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ImageChangeMobileComponent;
