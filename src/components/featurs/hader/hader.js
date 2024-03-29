import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./hader.css";
const Hader = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <section id="icon">
          <img src="./image/insta-logo.JPG" alt="logo" />
        </section>
        <section>
          <button onClick={() => navigate("/post")} className="createButton">
            <HomeIcon style={{ color: "black" }} />
            <p>Home</p>
          </button>
          <button onClick={() => navigate("/create")} className="createButton">
            <AddBoxOutlinedIcon style={{ color: "black" }} />
            <p>Create</p>
          </button>
        </section>
      </nav>
      <div className="varticalLine">jsjs</div>
    </>
  );
};
export default Hader;
