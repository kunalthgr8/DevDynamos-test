import Faq from "./components/FAQ/Faq";
import Intro from "./components/Intro/Intro";
import Message from "./components/Message/Message";
import Navbar from "./components/NavBar/Navbar";
import Main from "./components/MainPage/Main";
import Contact from "./components/Contact/Contact";
import BlogPage from "./components/Blogs/BlogPage";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Events from "./components/EventPage/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <Intro />
      <Message />
      <Faq/>
      <Project />
      <BlogPage/>
      <Events />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;