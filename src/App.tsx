// Styled
import { GlobalStyle } from "./styled/global";

// Components
import Home from "./components/Home/Home";
import MyTechnologies from "./components/MyTechnologies/MyTechnologies";
import Navbar from "./components/NavBar/Navbar";
import MyProjects from "./components/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";

// Router
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <MyTechnologies />
              <MyProjects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/myTechnologies"
          element={
            <>
              <MyTechnologies />
            </>
          }
        />
        <Route
          path="/myProjects"
          element={
            <>
              <MyProjects />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
