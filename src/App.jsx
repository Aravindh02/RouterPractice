import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactAdd from "./pages/ContactAdd";
import ContactEdit from "./pages/ContactEdit";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/protectedRoute";
function App() {

 const[isSignedIn, setIsSignedIn] = useState(null);

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login validate={setIsSignedIn}/>}></Route>
          <Route  path="Home" element={<Home />}></Route>
         
          <Route path="ContactAdd" element={<ContactAdd></ContactAdd>}></Route>
          <Route path="ContactEdit" element={<ContactEdit />}></Route>
          <Route path="Contact"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
