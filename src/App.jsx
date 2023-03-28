import React, { useState } from "react";
import "./App.css";
import { getWord } from "./utils/getWord";
import Content from "./components/Content";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

function App() {
  const [word, setWord] = useState("");
  const [empty, setEmpty] = useState(true);
  const [bgColor, setBgColor] = useState(false);
  const [data, setData] = useState({});

  const getResource = async (word) => {
    const res = await getWord(word);
    if (res) {
      setData(res[0]);
    } else {
      setWord("");
    }
  };

  function searchWord() {
    getResource(word);
  }

  function changeWord(e) {
    setWord(e.target.value);
    if (e.target.value.length > 0) {
      setEmpty(false);
    } else setEmpty(true);
  }

  return (
    <div className="app-container">
      <Header />
      <SearchInput
        onChange={changeWord}
        searchWord={() => searchWord()}
        empty={empty}
      />
      <Content word={data.word} phonetic={data.phonetic} />
    </div>
  );
}

export default App;
