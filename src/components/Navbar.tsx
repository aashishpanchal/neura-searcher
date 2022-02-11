import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar(props: {
  setTheme: () => string;
  defaultTheme: string;
}) {
  const [currentTheme, setCurrentTheme] = React.useState(props.defaultTheme);

  const setTheme = () => {
    setCurrentTheme(props.setTheme());
  };

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5  w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Neura 🚀
          </p>
        </Link>
        <button
          type="button"
          onClick={setTheme}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {currentTheme}
        </button>
      </div>
      <Search />
    </div>
  );
}
