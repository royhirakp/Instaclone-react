
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./CreatePost.css"
import Hader from "../hader/hader";
import Loader from "../Loder";
// import { Link } from "react-router-dom";
const CreatePost = () => {
const [data, setdata] = useState({ image: "", name: "", location: "", description: "" })
const [loder, setLoder] = useState(false)
let navigate = useNavigate();
     async function handleSubmit(e) {  
          e.preventDefault();
          setLoder(true)
          console.log(data)        
          try {
              // await fetch("http://localhost:4000/getpost/post", {    //https://instacloneapi.onrender.com/getpost/get
              await fetch("https://instacloneapi.onrender.com/getpost/post", {
                  method: 'POST',
                  headers:{
                      'Accept': 'application/json',
                      'Content-Type':'application/json'
                  },
                  body: JSON.stringify({data})
                })
                
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
     <form onSubmit = {handleSubmit} action="https://instacloneapi.onrender.com/getpost/post" method="POST" enctype="multipart/form-data">                  
      
        <div id="validLocation">
          <input
            type="file"
            name="Imagefile"
            // value={data.image}
            onChange={(e) => setdata({ ...data, image: e.target.value })}
          />
          <input
            placeholder="Author"
            // value={data.author}
            id="author"
            type="text"
            name="name"
            onChange={(e) => setdata({ ...data, name: e.target.value })}
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




