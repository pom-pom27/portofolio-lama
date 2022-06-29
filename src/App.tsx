import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import ProjectList from "./Components/ProjectList/ProjectList";
import Toggle from "./Components/Toggle/Toggle";
import { useThemeContext } from "./util/useThemeContext";

function App() {
  const { isDarkMode } = useThemeContext();
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#222" : "white",
        color: isDarkMode ? "white" : undefined,
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
