// import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Posts from "./components/Posts";
import Project from "./components/Project";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<SinglePost/>} path='/post/:slug'/>
        <Route element={<Posts/>} path='/posts'/>
        <Route element={<Project/>} path='/project'/>
      </Routes>
    </>
  );
}

export default App;
