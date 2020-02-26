import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import React from 'react';
import ReactPolling from 'react-polling';

const Home = ({ words, resp }) => (

  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

      <ReactPolling
        url={'http://faker.hook.io/'}
        interval= {3000} // in milliseconds(ms)
        // retryCount={3} // this is optional
        onSuccess={(resp) => {
          console.log(resp.text())
          return true
        }}
        onFailure={() => console.log('handle failure')} // this is optional
        method={'GET'}
        render={({ startPolling, stopPolling, isPolling }) => {
          console.log("rendering")
          console.log(isPolling)
          // startPolling()
          console.log(stopPolling)
          // renderPuzzle()
          return <p>This</p>


          }}
        />

    </main>
  </div>
)


// Home.getInitialProps = async ({ req }) => {

//   // const res = await fetch('http://faker.hook.io/')
//   // let json = await res.text()

//   // console.log(json)

//   // json = {words: [["b", , , "n", ], [, "o", ], [, , ], [, , , , , ]]}

//   // let words = json.slice(1, -2).split(" ")

//   // let render = renderPuzzle(words)

//   return {words: <ReactPolling
//     url={'http://faker.hook.io/'}
//     interval= {3000} // in milliseconds(ms)
//     // retryCount={3} // this is optional
//     onSuccess={() => {
//       // console.log(resp.text())
//       return true
//     }}
//     onFailure={() => console.log('handle failure')} // this is optional
//     method={'GET'}
//     render={({ startPolling, stopPolling, isPolling }) => {
//       console.log("rendering")
//       console.log(isPolling)
//       // startPolling()
//       console.log(stopPolling)
//       // renderPuzzle()
//       return <p>This</p>


//     }}
//   />
//   }
// }


const renderPuzzle = (words) => {
  let resp = []
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let container = []
    for(let j = 0; j <= word.length; j++) {
      if(word[j] === "" || word[j] === undefined) {
        container.push(<span key={j}> _ </span>)
      } else {
        container.push(<span key={j}> {word[j]} </span>)
      }
    }
    resp.push(container)
    resp.push(<br></br>)
  }

  return resp
}


const sleep = async () => {
  await sleep(2000)
}

export default Home
