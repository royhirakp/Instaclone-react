import {useState , useEffect} from "react"
import Postcard from "../../postcard/Postcard";
import Loader from "../Loder";
import axios from "axios"
import StaticPostCard from "../../postcard/SaticPostCard";
// import { useEffect } from "react";
const Post = ()=>{
    const [data1, setdata] = useState([]);
    const [loder, setLoder] = useState(false)

useEffect(() => {
    setLoder(true)
    axios.get("https://instacloneapi.onrender.com/getpost/get")
      .then((res) => {
        //reversing the response arry so that the last added post will come first 
        let res_arr = res.data.data
        // console.log(res_arr)
        let rev_res_arr = res_arr.reverse() 
          setdata(rev_res_arr)
        //   console.log(rev_res_arr)
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setLoder(false)
      })
      ;
  }, []);
        //Innisial data
   

    return (
        <>
       {loder ? <Loader/>:""}
        {data1.map((obj,i)=>{
            return  (
                <Postcard data={obj} key={i*0.025554}/>                
            )
        })}
        <>
        <StaticPostCard/>
        {/* {data.map((obj,i)=>{
            return  (     
                <Postcard data={obj} key={i*0.055525}/>                
            )
        })} */}
    
        </>
    
        </>
    )
}
export default Post;