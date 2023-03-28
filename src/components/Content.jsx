import React from "react";
import "./Content.css";

export default function Content(props) {
  return (
    <div className="content-container">
      <div className="content-word-main">
        <div className="content-word-box">
          <h3 className="content-word">{props.word}</h3>
          <p className="content-transcription">{props.phonetic}</p>
        </div>
        {props.word && (
          <svg
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
    </div>
  );
}
