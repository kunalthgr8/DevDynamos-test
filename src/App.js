import Faq from "./components/FAQ/Faq";
import Intro from "./components/Intro/Intro";
import Message from "./components/Message/Message";

import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Message />
      <Faq/>
      <Projects />
    </div>
  );
}

export default App;
