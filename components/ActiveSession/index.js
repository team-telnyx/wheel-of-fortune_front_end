import React from "react";
import css from "./style.css";
import classNames from "classnames";

/* [
     ["b", undefined, undefined, "n", undefined],
     [undefined, "o", undefined, undefined],
     [undefined, undefined, undefined],
     [undefined, undefined, undefined, undefined, undefined, undefined]
   ] */
const ActiveSession = ({ words }) => {
  return (
    <article className={css.wrapper}>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterFilled)}>B</span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterFilled)}>N</span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterFilled)}>O</span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterFilled)}>N</span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterFilled)}>R</span>
        <span className={classNames(css.letter, css.letterFilled)}>R</span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterBlank)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
      <p className={css.word}>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
        <span className={classNames(css.letter, css.letterPlaceholder)}></span>
      </p>
    </article>
  );
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
