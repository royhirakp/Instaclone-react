import {useState , useEffect} from "react"
import Postcard from "../../postcard/Postcard";
import axios from "axios"
// import { useEffect } from "react";
const Post = ()=>{
    const [data1, setdata] = useState([])
    
 //https://instacloneapi.onrender.com/getpost/get
  
//////// free apit ::: https://api.nationalize.io/?name=nathaniel
useEffect(() => {
    // axios.get("http://localhost:4000/getpost/get")
    axios.get("https://instacloneapi.onrender.com/getpost/get")
      .then((res) => {
        //reversing the response arry so that the last added post will come first 
        let res_arr = res.data
        let rev_res_arr = res_arr.reverse() 
          setdata(rev_res_arr)
          console.log(rev_res_arr)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
        //Innisial data
    const data =  [
        {"name":"Siva",
        "location":"Bengaluru",
        "like":64,
        "description": "Kick start your career",
        "PostImage": "../../image/10x.png",
        "date": "12/02/2022"
        },
        {"name":"Neeraj",
        "location":"Pune",
        "like":30,
        "description": "Sample Description",
        "PostImage": "../image/nature.jfif",
        "date": "15/05/2022"
        },
        {"name":"Rahul",
        "location":"Hyderabad",
        "like":30,
        "description": "Sample Description for Post",
        "PostImage": "../image/flight.jfif",
        "date": "10/06/2022"
        }
        ]

    return (
        <>
        {data1.map((obj,i)=>{
            return  (
                <>              
                <Postcard data={obj}/>                
                </>
            )
        })}
        <>
        {data.map((obj,i)=>{
            return  (
                <>              
                <Postcard data={obj}/>                
                </>
            )
        })}
    
        </>
    
        </>
    )
}
export default Post;