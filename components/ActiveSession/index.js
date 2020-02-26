import React, { useEffect } from "react";
import { useSetState } from "react-hanger";
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
const ActiveSession = () => {
  const { state, setState } = useSetState({});

  function fetchSession() {
    console.log("fetchSession");
    return GameService.postSession().then(session => {
      setState({ session });
    });
  }

  useEffect(() => {
    fetchSession();

    const sessionInterval = setInterval(() => {
      fetchSession();
    }, 5000);

    return () => {
      clearInterval(sessionInterval);
    };
  }, []);

  if (!state.session) {
    return <div />;
  }

  return (
    <article className={css.wrapper}>
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
                    [css.letterBlank]: letter === undefined,
                    [css.letterFilled]: letter !== undefined
                  })}
                >
                  {letter === undefined ? null : letter}
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
        state.session.words
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
