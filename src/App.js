import React from "react";
import "./App.css";
import { ThemeContext } from "./context/themeContext";
import MyComponent from "./component/myComponent";
import Dashboard from "./component/dashboard";

function App() {
  const [theme, setTheme] = React.useState(true);

  return (
    <ThemeContext.Provider value={theme ? "dark" : "light"}>
      {/* <MyComponent /> */}
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
