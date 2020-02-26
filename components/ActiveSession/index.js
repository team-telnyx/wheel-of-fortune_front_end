import React from "react";

/* [
     ["b", undefined, undefined, "n", undefined],
     [undefined, "o", undefined, undefined],
     [undefined, undefined, undefined],
     [undefined, undefined, undefined, undefined, undefined, undefined]
   ] */
const ActiveSession = ({ words }) => {
  return <pre>{JSON.stringify(words, null, 2)}</pre>;
};

const renderPuzzle = words => {
  let resp = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let container = [];
    for (let j = 0; j <= word.length; j++) {
      if (word[j] === "" || word[j] === undefined) {
        container.push(<span key={j}> _ </span>);
      } else {
        container.push(<span key={j}> {word[j]} </span>);
      }
    }
    resp.push(container);
    resp.push(<br></br>);
  }

  return resp;
};

export default ActiveSession;
