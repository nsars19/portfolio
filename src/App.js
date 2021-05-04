import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Intro />
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </>
  );
}

export default App;
