import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const getTheme = () => {
    return darkTheme ? "dark" : "light";
  };

  const setTheme = (): string => {
    setDarkTheme(!darkTheme);
    return !darkTheme ? "Dark 🌜" : "Light 🌞";
  };

  return (
    <div className={`${getTheme()}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar defaultTheme="Dark 🌜" setTheme={setTheme} />
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}
