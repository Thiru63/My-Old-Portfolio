import About from "./about/About";
import "./App.css";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Project from "./project/Project";
import Service from "./service/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       {/* <Service /> */}
       <Project />
       {/* <Blog /> */}
       <Contact />
       <Footer />
    </div>
  );
}

export default App;