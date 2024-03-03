
import {BrowserRouter,Route , Routes } from "react-router-dom"

import Homes from "./portfolio/home/home "
import About from "./portfolio/about/about"
import Progect from "./portfolio/project/Progects"
import Skils from "./portfolio/skills/Skills"
import Contact from "./portfolio/contact/contact";
function App() {
  return (
    <div>

{

 <BrowserRouter>
<Routes>

<Route path="/" element={<Homes/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/progect" element={<Progect/>}/>
<Route path="/skills" element={<Skils/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

</BrowserRouter> }

    </div>
  );
}

export default App;
