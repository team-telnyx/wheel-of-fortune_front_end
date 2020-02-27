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

  function fetchMetadata() {
    console.log("fetchMetadata");
    return GameService.getMetadata().then(response => {
      console.log(response);
      setGameState({ meta: response });
    });
  }

  function fetchSession() {
    console.log("fetchSession");
    return GameService.postSession().then(session => {
      console.log(session);
      setGameState({ session });
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
    fetchSession();

    const sessionInterval = setInterval(() => {
      if (gameState.meta.sessionActive) {
        fetchSession();
      }
    }, 10000);

    return () => {
      clearInterval(sessionInterval);
    };
  }, [gameState.meta.sessionActive]);

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
        {gameState.meta.sessionActive && (
          <ActiveSession session={gameState.session} meta={gameState.meta} />
        )}
      </main>
    </div>
  );
};

export default Home;
