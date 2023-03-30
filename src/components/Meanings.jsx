import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  const selectWord = (word) => {
    props.onClick(word);
  };
  return (
    <div className="meaning-container">
      <div className="meaning-part-speech-box">
        <span>{props.partOfSpeech}</span>
        <div></div>
      </div>
      <h3 className="meaning-title">Meaning</h3>
      <ul className="meaning-definition-box">
        {props.meaning.definitions.map((element, index) => {
          return (
            <li key={index}>
              <span>{element.definition}</span>
            </li>
          );
        })}
      </ul>
      {props.meaning.synonyms.length !== 0 && (
        <div className="meaning-synonyms-box">
          <p>Synonyms</p>
          {props.meaning.synonyms.map((element, index) => {
            return (
              <span onClick={() => selectWord(element)} key={index}>
                {element}
              </span>
            );
          })}
        </div>
      )}
      {props.meaning.antonyms.length !== 0 && (
        <div className="meaning-antonyms-box">
          <p>Antonyms</p>
          {props.meaning.antonyms.map((element, index) => {
            return <span key={index}>{element}</span>;
          })}
        </div>
      )}
    </div>
  );
}
