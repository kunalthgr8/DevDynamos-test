import Faq from "./components/FAQ/Faq";
import Intro from "./components/Intro/Intro";
import Message from "./components/Message/Message";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Project";
import Main from "./components/MainPage/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <Intro />
      <Message />
      <Faq/>
      <Projects />
    </div>
  );
}

export default App;