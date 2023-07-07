import Blogs from "./Blogs";
import Contact from "./Contact";
import Events from "./Events";
import Footer from "./Footer";
import Intro from "./Intro";
import Message from "./Message";
import Navbar from "./Navbar";
import Projects from "./Project";
import Question from "./Question";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Message />
      <Question />
      <Projects />
      <Blogs />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
