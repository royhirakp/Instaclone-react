import Landingpage from "./components/LoadingPage/landing_page";
import Postview from "./components/PostView/postview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post" element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
