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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectSite from "./components/ProjectSite/ProjectSite";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/"
              element={
                <div>
                  <Main />
                  <Intro />
                  <Message />
                  <Faq />
                  <Project />
                  <BlogPage />
                  <Events />
                  <Contact />
                  <Footer />
                </div>} />
            <Route exact path="/projects/:id" element={<ProjectSite />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;