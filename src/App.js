import React, { useState, useEffect } from "react";
import Landing from "./components/Landing/Landing";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";
import Navbar from "./components/NavBar/NavBar";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <>
          <Navbar />
          <Landing />
          <ProjectList />
          <About />
          <Contact />
          <Social />
        </>
    </div>
  );
}

export default App;