import React, { useEffect, useState } from "react";
import "./App.css";
import { getWord } from "./utils/getWord";
import Content from "./components/Content";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  const [word, setWord] = useState("table");
  const [bgColor, setBgColor] = useState(false);

  const getResource = async (word) => {
    const res = await getWord(word);
  };

  useEffect(() => {
    getResource(word);
  }, [word]);

  return (
    <div className="app-container">
      <Header />
      <SearchInput />
      <Content />
    </div>
  );
}

export default App;
