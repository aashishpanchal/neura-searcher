import React, { useContext, useState } from "react";
import { BASE_URL, RAPIDAPI_HOST, RAPIDAPI_KEY } from "./config";
import { StateSearchContext } from "./contexts";

const getUrl = (query: string) => {
  return `${BASE_URL}${query}`;
};

export function SearchContextProvider(props: {
  children: React.ReactNode;
}) {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getSearchResults = async (query: string) => {
    setLoading(true);

    const response = await fetch(getUrl(query), {
      method: "GET",
      headers: {
        "x-rapidapi-host": RAPIDAPI_HOST as string,
        "x-rapidapi-key": RAPIDAPI_KEY as string,
      },
    });

    const data = await response.json();
    
    if (query.includes('/news')){
      setResults(data.entries);
    } else if (query.includes('/images')){
      setResults(data.image_results);
    }  else {
      setResults(data.results);
    }

    setLoading(false);
  };
  return (
    <StateSearchContext.Provider
      value={{ getSearchResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {props.children}
    </StateSearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(StateSearchContext);
