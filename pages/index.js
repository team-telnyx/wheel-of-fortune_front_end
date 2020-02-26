import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React from 'react';
import ReactPolling from 'react-polling';
import GameService from '../services/GameService';
import ActiveSession from '../components/ActiveSession';

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

  return (
    <div className="container">
      <Head>
        <title>Wheel of Fortune</title>
      </Head>
      <main>
        <ActiveSession words={[["b", , , "n", ], [, "o", ], [, , ], [, , , , , ]]} />
      </main>
    </div>
  )
}

export default Home
