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
const ActiveGame = ({ game, meta }) => {
  console.log(game);
  if (!game || !game.words) {
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
          game.words
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
                <li key={winner.phoneNumber} className={css.winner}>
                  {winner.phoneNumber}
                </li>
              ),
              meta.winners
            )}
        </ol>
      </section>
    </div>
  );
};

export default ActiveGame;
