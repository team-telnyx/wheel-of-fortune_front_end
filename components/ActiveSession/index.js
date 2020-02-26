import React from "react";
import css from "./style.css";
import classNames from "classnames";
import * as R from "ramda";

import GameService from "../../services/GameService";

const MAX_CHAR_COUNT = 12;
const CHAR_PADDING = 1;

/* [
     ["b", undefined, undefined, "n", undefined],
     [undefined, "o", undefined, undefined],
     [undefined, undefined, undefined],
     [undefined, undefined, undefined, undefined, undefined, undefined]
   ] */
const ActiveSession = ({ session, meta }) => {
  console.log(session);
  if (!session) {
    return <div />;
  }

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <h1 className={css.textInfoHeading}>
          Text <strong>{meta.number}</strong> to play!
        </h1>
      </header>

      <article className={css.words}>
        <p className={css.word}>
          {R.times(
            R.always(
              <span className={classNames(css.letter, css.letterPlaceholder)} />
            ),
            CHAR_PADDING + MAX_CHAR_COUNT + CHAR_PADDING
          )}
        </p>

        {R.map(
          word => (
            <p className={css.word}>
              <span className={classNames(css.letter, css.letterPlaceholder)} />
              {R.map(
                letter => (
                  <span
                    className={classNames(css.letter, {
                      [css.letterBlank]: letter === "-",
                      [css.letterFilled]: letter !== "-"
                    })}
                  >
                    {letter === "-" ? null : letter}
                  </span>
                ),
                word
              )}
              {R.times(
                R.always(
                  <span
                    className={classNames(css.letter, css.letterPlaceholder)}
                  />
                ),
                CHAR_PADDING + MAX_CHAR_COUNT - word.length
              )}
            </p>
          ),
          session.words
        )}

        <p className={css.word}>
          {R.times(
            R.always(
              <span className={classNames(css.letter, css.letterPlaceholder)} />
            ),
            CHAR_PADDING + MAX_CHAR_COUNT + CHAR_PADDING
          )}
        </p>
      </article>

      <section className={css.winnersWrapper}>
        <ol className={css.winners}>
          {meta.winners &&
            R.map(
              winner => (
                <li key={winner} className={css.winner}>
                  {winner}
                </li>
              ),
              meta.winners
            )}
        </ol>
      </section>
    </div>
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
