import { createContext, useState } from "react";

export interface IThemeContext {
  isDarkMode: boolean;
  toggleDarkMode?: () => void;
}
interface ContextProps {
  children: React.ReactElement;
}

const INITIAL_STATE: IThemeContext = { isDarkMode: true };

export const ThemeContext = createContext<IThemeContext>(INITIAL_STATE);

const ThemeProvider: React.FC<ContextProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
