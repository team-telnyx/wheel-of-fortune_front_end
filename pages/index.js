import Head from "next/head";
import React, { useEffect } from "react";
import { useSetState } from "react-hanger";
import GameService from "../services/GameService";
import ActiveSession from "../components/ActiveSession";

/**
 * TODO
 * - Poll for the session puzzle
 * - Get the list of winners
 *
 * STATES
 * - No session
 * - Puzzle
 * - End of session
 */

const Home = ({ words, resp }) => {
  const { state: gameState, setState: setGameState } = useSetState({
    meta: {}
  });

  useEffect(() => {
    const metadataInterval = setInterval(() => {
      GameService.getMetadata().then(response => {
        setGameState({ meta: response });
      });
    }, 1000);

    return () => {
      clearInterval(metadataInterval);
    };
  });

  return (
    <div className="container">
      <Head>
        <title>Wheel of Fortune</title>
      </Head>
      <main>
        {gameState.meta.sessionActive && (
          <ActiveSession
            words={[
              ["b", undefined, undefined, "n", undefined],
              [undefined, "o", undefined, undefined],
              [undefined, undefined, undefined],
              [undefined, undefined, undefined, undefined, undefined, undefined]
            ]}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
