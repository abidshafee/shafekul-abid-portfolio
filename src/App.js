// import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    // <div className='text-4xl font-bold font-myfont'>
    //   <h1>Shafekul Abid</h1>
    // </div>
    
    // Switch has been replaced by Routes
    // <BrowserRouter>
    //   <Routes>
    //     <Route component={Home} path='/' exact />
    //     <Route component={About} path='/about'/>
    //     <Route component={SinglePost} path='/post/:slug'/>
    //     <Route component={Post} path='/post'/>
    //     <Route component={Project} path='/project'/>
    //   </Routes>
    // </BrowserRouter>

    <div>
      <NavBar/>
    </div>
  );
}

export default App;
