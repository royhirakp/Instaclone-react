import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import Hader from "../featurs/hader/hader";
import Loader from "../featurs/Loder";

import { usePostFormDataMutation } from "../../Redux/getDataPApi/getDataApi";
const CreatePost = () => {
  const [data, setdata] = useState({
    image: "",
    author: "",
    location: "",
    description: "",
  });
  let navigate = useNavigate();
  //REDUX
  const [postMutation, { isLoading, isError }] = usePostFormDataMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", data.image, data.image.name);
      formData.append("author", data.author);
      formData.append("location", data.location);
      formData.append("description", data.description);
      const res = await postMutation(formData);
      if (res.data.status === "sucsess") navigate("../post");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {isLoading ? <Loader /> : ""}

      <h2>Create post page </h2>
      <Hader />

      <form onSubmit={handleSubmit}>
        <div id="validLocation">
          <input
            type="file"
            name="image"
            onChange={(e) => setdata({ ...data, image: e.target.files[0] })}
          />
          <input
            placeholder="Author"
            id="author"
            type="text"
            name="author"
            onChange={(e) => setdata({ ...data, author: e.target.value })}
          />
          <input
            placeholder="Location"
            id="Location"
            name="location"
            type="text"
            onChange={(e) => setdata({ ...data, location: e.target.value })}
          />
        </div>
        <input
          placeholder="Description"
          id="description"
          name="description"
          type="text"
          onChange={(e) => setdata({ ...data, description: e.target.value })}
        />

        <button type="submit">post</button>
      </form>

      {isError
        ? "Some error form server ! to post the data, Please Try again "
        : ""}
    </div>
  );
};
export default CreatePost;
