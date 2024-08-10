import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Project_1 from './Components/Projects/Project-Pages/Project_1';
import Project_2 from './Components/Projects/Project-Pages/Project_2';
import Project_3 from './Components/Projects/Project-Pages/Project_3';
import Project_4 from './Components/Projects/Project-Pages/Project_4';
import About from './Components/About/About';
import Service from './Components/Services/Service';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
              <Route path="/" element={<Main/>}/>  
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Service />} />
            
            <Route path='/blogify' element={<Project_1 />} />
            <Route path='/healthcare-portal' element={<Project_2 />} />
            <Route path='/admin-panel' element={<Project_3 />} />
            <Route path='/mighty-comic-store' element={<Project_4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
