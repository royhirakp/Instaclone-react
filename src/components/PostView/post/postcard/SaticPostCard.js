import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import "./Postcard.css";
import { memo } from "react";
const data = [
  {
    author: "Siva",
    location: "Bengaluru",
    like: 64,
    description: "Kick start your career",
    PostImage: "../../image/10x.png",
    date: "12/02/2022",
  },
  {
    author: "Neeraj",
    location: "Pune",
    like: 30,
    description: "Sample Description",
    PostImage: "../image/nature.jfif",
    date: "15/05/2022",
  },
  {
    author: "Rahul",
    location: "Hyderabad",
    like: 30,
    description: "Sample Description for Post",
    PostImage: "../image/flight.jfif",
    date: "10/06/2022",
  },
];
const StaticPostCard = () => {
  return (
    <>
      {data.map((item, i) => {
        const { author, location, like, description, PostImage, date } = item;
        return (
          <div id="cointainrer" key={i * 0.00505}>
            <header>
              {/* <img src="./image/10x.png"/> */}
              <section id="name_place">
                <p>
                  <b>{author}</b>
                </p>
                <p>{location}</p>
              </section>
              <section id="option_icon">...</section>
            </header>
            <section id="image">
              <img src={PostImage} alt="10x pic" />
            </section>

            <section id="like_share_date">
              <div id="like_shair">
                <AiOutlineHeart />{" "}
                <span>
                  <BsFillArrowUpRightSquareFill />
                </span>{" "}
              </div>
              <div id="date">{`${date}`}</div>
            </section>
            <section id="no_of_like">{`${like} likes`}</section>
            <footer id="describtion">
              <b>{description}</b>
            </footer>
          </div>
        );
      })}
    </>
  );
};
export default memo(StaticPostCard);
