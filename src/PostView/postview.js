import React from 'react';
import Hader from '../components/hader/hader';
import Post from '../components/post/post';
 //require : this is needed to import api image in the ui
export default function Postview() {
  return (<>
  <h2>postview Page</h2>
            <Hader/>
            {/* <img src={require("../image_file_src/10x.png")}/>  */}
            <Post/>  
            </>
  );
}
