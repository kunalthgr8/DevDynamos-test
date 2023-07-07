import Blogs from "./Blogs";
import Events from "./Events";
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
    </div>
  );
}

export default App;
