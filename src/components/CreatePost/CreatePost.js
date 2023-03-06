
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./CreatePost.css"
import Hader from "../hader/hader";
import Loader from "../Loder";
import axios from "axios"
// import { Link } from "react-router-dom";
const CreatePost = () => {
const [data, setdata] = useState({ image: "", author: "", location: "", description: "" })
const [loder, setLoder] = useState(false)
let navigate = useNavigate();
     async function handleSubmit(e) {  
          e.preventDefault();
          // console.log(data)
            setLoder(true)
          const formData = new FormData();    
            formData.append('image',data.image,data.image.name);
            formData.append('author',data.author);
            formData.append('location',data.location);
            formData.append('description',data.description);        
            console.log(formData)

            try {
              await axios.post('https://instacloneapi.onrender.com/getpost/post',formData)
                  // console.log(res,'<=image post axios')       
          } catch (error) {
              console.log(error)
          }
         setLoder(false)
          navigate("../post")   
          
        };

//************************************************************************ */
  return (
    <div>
    
       {loder ? <Loader/>:""}
      <h2>Create post page </h2>
      <Hader />

     {/* <form onSubmit = {handleSubmit} action="http://localhost:4000/getpost/post" method="POST" enctype="multipart/form-data"> */}
     <form onSubmit = {handleSubmit} >                  
      
        <div id="validLocation">
          <input
            type="file"
            name="image"
            // value={data.image}
            onChange={(e) => setdata({ ...data, image: e.target.files[0] })}
          />
          <input
            placeholder="Author"
            // value={data.author}
            id="author"
            type="text"
            name="author"
            onChange={(e) => setdata({ ...data, author: e.target.value })} 
          />
          <input
            placeholder="Location"
            // value={data.location}
            id="Location"
            name="location"
            type="text"
            onChange={(e) => setdata({ ...data, location: e.target.value })}
          />
        </div>
        <input
          placeholder="Description"
          // value={data.description}
          id="description"
          name="description"
          type="text"
          onChange={(e) => setdata({ ...data, description: e.target.value })}
        />

        {/* <button><Link to="/post">Post</Link></button> */}
        <button type="submit">post</button>
        {/* <button ></button> */}
      </form>

    </div>
  )
}
export default CreatePost;




