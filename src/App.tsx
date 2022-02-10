/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router";

export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const getTheme = () => {
    return darkTheme ? "dark" : "";
  };

  return (
    <div className={`${getTheme()}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}
