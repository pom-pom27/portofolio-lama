import Moon from "../../../img/moon.png";
import Sun from "../../../img/sun.png";
import { useThemeContext } from "../../util/useThemeContext";
import "./toggle.scss";
interface ToggleProps {}

const Toggle: React.FC<ToggleProps> = () => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <div onClick={toggleDarkMode} className="toggle">
      <img src={Sun} alt="light mode" className="toggle-icon" />
      <img src={Moon} alt="dark mode" className="toggle-icon" />
      <div
        className="toggle-button"
        style={{ left: isDarkMode ? 25 : 0 }}
      ></div>
    </div>
  );
};

export default Toggle;
