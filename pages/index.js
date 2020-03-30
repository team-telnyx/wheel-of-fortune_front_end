import Head from "next/head";
import React, { useEffect } from "react";
import { useSetState } from "react-hanger";

import GameService from "../services/GameService";
import ActiveGame from "../components/ActiveGame";

/**
 * TODO
 * - Poll for the game puzzle
 * - Get the list of winners
 *
 * STATES
 * - No game
 * - Puzzle
 * - End of game
 */

const Home = ({ words, resp }) => {
  const { state: gameState, setState: setGameState } = useSetState({
    meta: {}
  });

  function fetchMetadata() {
    console.log("fetchMetadata");
    return GameService.getMetadata().then(response => {
      console.log(response);
      setGameState({ meta: response });
    });
  }

  function fetchGame() {
    console.log("fetchGame");
    return GameService.postGame().then(game => {
      console.log(game);
      setGameState({ game });
    });
  }

  useEffect(() => {
    fetchMetadata();

    const metadataInterval = setInterval(() => {
      fetchMetadata();
    }, 3000);

    return () => {
      clearInterval(metadataInterval);
    };
  }, []);

  useEffect(() => {
    fetchGame();

    const gameInterval = setInterval(() => {
      if (gameState.meta.gameActive) {
        fetchGame();
      }
    }, 10000);

    return () => {
      clearInterval(gameInterval);
    };
  }, [gameState.meta.gameActive]);

  return (
    <div className="container">
      <Head>
        <title>Wheel of Fortune</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <style
          children={`
              body, html { margin: 0; }
              body { background-color: #1D2241; }
              * { box-sizing: border-box; }
            `}
        />
      </Head>
      <main>
        {gameState.meta.gameActive && (
          <ActiveGame game={gameState.game} meta={gameState.meta} />
        )}
      </main>
    </div>
  );
};

export default Home;
