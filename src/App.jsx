import React, { useState } from "react";
import "./App.css";
import { getWord } from "./utils/getWord";
import { getAudioUrl } from "./utils/getAudioUrl";
import Content from "./components/Content";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SearchInput from "./components/SearchInput";

function App() {
  // -----------------Variables
  const [word, setWord] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const [empty, setEmpty] = useState(false);
  const [incorrectWord, setIncorrectWord] = useState(false);

  const [bgColor, setBgColor] = useState({});

  const [data, setData] = useState("");
  // --------------functions

  const getResource = async (word) => {
    const [res] = await getWord(word);
    setIncorrectWord(false);
    if (res) {
      setData(res);
      setAudioUrl(getAudioUrl(res));
    } else {
      setIncorrectWord(true);
    }
  };

  function searchWord() {
    getResource(word);

    if (word.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setWord("");
    }
  }

  return (
    <div className="app-container">
      <Header />
      <SearchInput
        onChange={(e) => setWord(e.target.value)}
        searchWord={() => searchWord()}
        empty={empty}
        word={word}
      />
      {incorrectWord ? (
        <NotFound />
      ) : (
        <Content
          word={data.word}
          phonetic={data.phonetic}
          audioUrl={audioUrl}
        />
      )}
    </div>
  );
}

export default App;
