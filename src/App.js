// import Faq from "./components/FAQ/Faq";
import Intro from "./components/Intro/Intro";
import Message from "./components/Message/Message";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Project";
import Question from "./components/Question";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <Faq/> */}
      <Message />
      {/* <Question /> */}
      <Projects />
    </div>
  );
}

export default App;
