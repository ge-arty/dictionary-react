import React, { useState } from "react";
import "./App.css";
import { getWord } from "./utils/getWord";
import Content from "./components/Content";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SearchInput from "./components/SearchInput";

function App() {
  // -----------------Variables
  const [word, setWord] = useState("");

  const [empty, setEmpty] = useState(false);
  const [incorrectWord, setIncorrectWord] = useState(false);

  const [bgColor, setBgColor] = useState({});

  const [data, setData] = useState({});
  // --------------functions

  const getResource = async (word) => {
    const res = await getWord(word);

    setIncorrectWord(false);

    if (res) {
      setData(res[0]);
    } else {
      setIncorrectWord(true);
    }
  };
  console.log(data);
  function searchWord() {
    getResource(word);

    if (word.length === 0) {
      setEmpty(true);
    } else setEmpty(false);
  }

  function changeWord(e) {
    setWord(e.target.value);
  }

  return (
    <div className="app-container">
      <Header />
      <SearchInput
        onChange={changeWord}
        searchWord={() => searchWord()}
        empty={empty}
      />
      {incorrectWord ? (
        <NotFound />
      ) : (
        <Content word={data.word} phonetic={data.phonetic} />
      )}
    </div>
  );
}

export default App;
