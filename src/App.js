import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./components/contact/Contact";
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import NotFound from "./components/notfound/NotFound";
import Projects from "./components/projects/Projects";
import { Container } from "react-bootstrap";

// odrer matter, expend link should be bellow 
//because this is basically a switch case
export const navigation = [
  { title: "Home", path: "/", element: <Home /> },
  { title: "Projects", path: "/projects", element: <Projects /> },
  { title: "Contact", path: "/contact", element: <Contact /> },
]

// Making it work for one page app with bootstrap, 
// but my plan is to make it functional as apple.com.

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Container  fluid="md">
          <Routes>
            {navigation.map((item, index) => (
              <Route path={item.path} element={item.element} />
            ))}
            <Route path="*" element={<NotFound />} />

          </Routes>


          <Routes>
            <Route path="/contact" element={<h1>On contact only</h1>} />
          </Routes>
        </Container>

      </Router>



    </div>
  );
}

export default App;
