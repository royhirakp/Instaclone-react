// import logo from './logo.svg';
import './App.css';
// import Hader from './components/hader/hader';
// import Card from './components/card/card';
// import Postcard from './postcard/Postcard';
// import Post from './components/post/post';
// import Landing_page from './LoadingPage/landing_page';
import Landingpage from './components/LoadingPage/landing_page';
import Postview from './PostView/postview';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreatePost from './components/CreatePost/CreatePost';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Landingpage/>}/>
          <Route path='/create' element ={<CreatePost/>}/>          
          <Route path='/post' element={<Postview/>}/>
        </Routes>
    </BrowserRouter>
    
  
    </>
  );
}

export default App;
