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
    </div>
  );
}

export default App;
