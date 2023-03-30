import React from "react";
import "./Content.css";
import Meanings from "./Meanings";

export default function Content(props) {
  function playAudio() {
    if (!props.audioUrl === false) {
      let audio = new Audio(props.audioUrl);
      audio.play();
    }
  }

  return (
    <div className="content-container">
      <div className="content-word-main">
        <div className="content-word-box">
          <h3 className="content-word">{props.word}</h3>
          <p className="content-transcription">{props.phonetic}</p>
        </div>
        {props.word && (
          <svg
            className="content-play"
            onClick={() => playAudio()}
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 27V48L50 37.5L29 27Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      {props.meanings?.map((meaning, index) => {
        return (
          <Meanings
            key={index}
            partOfSpeech={meaning.partOfSpeech}
            meaning={meaning}
            onClick={props.onClick}
          />
        );
      })}
      {props.sourceUrls && (
        <>
          <div className="content-horizontal-line"></div>
          <div className="content-source-box">
            <span> Source</span>
            {props.sourceUrls?.map((link, index) => {
              return (
                <a key={index} href={link}>
                  {link}
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
