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
  const [activeThemeBtn, setActiveThemeBtn] = useState(false);

  const bgColor = {
    white: "#FFFFFF",
    black: "#050505",
    gray: "#757575",
    inputCol: "#1F1F1F",
    btnCol: "#A445ED",
  };

  const [data, setData] = useState("");

  // --------------functions

  function activateBtn() {
    setActiveThemeBtn(!activeThemeBtn);
  }

  const getResource = async (word) => {
    const res = await getWord(word);

    if (!res) {
      setIncorrectWord(true);
      return;
    }
    setData(res[0]);
    setAudioUrl(getAudioUrl(res[0]));
    setIncorrectWord(false);
  };

  function searchWord() {
    getResource(word);

    if (word.length === 0) {
      setEmpty(true);
      setIncorrectWord(true);
    } else {
      setEmpty(false);
      setWord("");
    }
  }

  function selectWord(word) {
    if (word.includes(" ")) {
      setIncorrectWord(true);
    } else getResource(word);
  }

  return (
    <div
      className="app-container"
      style={activeThemeBtn ? { backgroundColor: bgColor.black } : {}}
    >
      <Header
        activeThemeBtn={activeThemeBtn}
        activateBtn={activateBtn}
        bgColorW={bgColor.white}
        bgColorP={bgColor.btnCol}
        bgColorInput={bgColor.inputCol}
      />
      <SearchInput
        onChange={(e) => setWord(e.target.value)}
        searchWord={() => searchWord()}
        empty={empty}
        word={word}
        activeThemeBtn={activeThemeBtn}
        bgColorW={bgColor.white}
        bgColorInput={bgColor.inputCol}
      />
      {incorrectWord ? (
        <NotFound />
      ) : (
        <Content
          word={data.word}
          phonetic={data.phonetic}
          audioUrl={audioUrl}
          meanings={data.meanings}
          sourceUrls={data.sourceUrls}
          onClick={selectWord}
          activeThemeBtn={activeThemeBtn}
          bgColorW={bgColor.white}
        />
      )}
    </div>
  );
}

export default App;
