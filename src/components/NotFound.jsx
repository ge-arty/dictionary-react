import React from "react";
import "./NotFound.css";

export default function notFound() {
  return (
    <div className="not-found-container">
      <span className="not-found-emoji">😕</span>
      <h3 className="not-found-title">No Definitions Found</h3>
      <p className="not-found-text">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
