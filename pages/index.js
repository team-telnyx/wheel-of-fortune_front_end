import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = ({ words, resp }) => (

  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        {words}
      </h1>

      {resp}



    </main>
  </div>
)


Home.getInitialProps = async ({ req }) => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()

  const json = {words: [["b", , , "n", ], [, "o", ], [, , ], [, , , , , ]]}

  let words = json.words

  let resp = []

  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let container = []
    for(let j = 0; j <= word.length; j++) {
      if(word[j] === "" || word[j] === undefined) {
        container.push(<span> _ </span>)
      } else {
        container.push(<span> {word[j]} </span>)
      }
    }
    resp.push(container)
    resp.push(<br></br>)
  }

  return { words: words, resp: resp }
}

export default Home
