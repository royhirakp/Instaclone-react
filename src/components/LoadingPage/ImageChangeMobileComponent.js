import React, { useEffect, useState } from 'react'
import "./landing_page.css"
// import Tempsnip from "./mobiledisplayChangeImages/tempsnip.png"
// import tempsnip1 from  "../../../public/mobiledisplayChangeImages/tempsnip1.png"
// import tempsnip2 from  "../../../public/mobiledisplayChangeImages/tempsnip2.png"
// import tempsnip3 from  "../../../public/mobiledisplayChangeImages/tempsnip3.png"
const ImageChangeMobileComponent = () => {
    let [imageNo, setImageNo] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            // console.log('setInterval')
            setImageNo(pre=>{
                
                if(pre > 4){
                    // console.log(pre)
                    return 0;
                }
                return pre+1
            })
        },4000)
    },[])
  return (
    <div className='Divtest'>

        <img  className='imageTagChangephoto' src={`./mobiledisplayChangeImages/tempsnip${imageNo}.png`} alt="" />
      
    </div>
  )
}

export default ImageChangeMobileComponent
