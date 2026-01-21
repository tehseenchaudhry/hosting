// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Hosting from './pages/Hosting'
// import Layout from './components/common/Layout'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <BrowserRouter>
  
//    <Routes>
//     <Route  component={<Layout/>}>
//     <Route path='/' component={<Hosting/>}/>
    
//     </Route>
//    </Routes>
 
//    </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Hosting from "./pages/Hosting";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<Layout />}>

          {/* Home page */}
          <Route index element={<Hosting />} />

          {/* Hosting page */}
          <Route path="hosting" element={<Hosting />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
