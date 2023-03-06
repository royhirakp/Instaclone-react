import {useState , useEffect} from "react"
import Postcard from "../../postcard/Postcard";
import Loader from "../Loder";
import axios from "axios"
// import { useEffect } from "react";
const Post = ()=>{
    const [data1, setdata] = useState([]);
    const [loder, setLoder] = useState(false)

useEffect(() => {
    setLoder(true)
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
      }).finally(()=>{
        setLoder(false)
      })
      ;
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
       {loder ? <Loader/>:""}
        {data1.map((obj,i)=>{
            return  (
                <Postcard data={obj} key={i*0.025554}/>                
            )
        })}
        <>
        {data.map((obj,i)=>{
            return  (     
                <Postcard data={obj} key={i*0.055525}/>                
            )
        })}
    
        </>
    
        </>
    )
}
export default Post;