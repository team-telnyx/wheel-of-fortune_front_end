import axios from "axios";

const GameService = {
  /**
   * example response {words: [[b,r,i,n,g], [y,o,u,r], [o,w,n], [c,a,r,r,i,e,r]]}
   */
  // postSession() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         words: [
  //           ["b", undefined, undefined, "n", undefined],
  //           [undefined, "o", undefined, undefined],
  //           [undefined, undefined, undefined],
  //           [undefined, undefined, undefined, undefined, undefined, undefined]
  //         ]
  //       });
  //     }, 150);
  //   });
  // },

  postSession() {
    return axios.post("https://ef3df964.ngrok.io/data/letter").then(
      response =>
        console.log(response) || {
          words: response.data.phrase
        }
    );
  },

  /**
   * example response
   * {
   *   winners: [
   *     "abcxyz",
   *     "badal",
   *     "hugo",
   *     "enzo",
   *     "gero",
   *     "vladi",
   *     "sua",
   *     "eoghan",
   *     "tony",
   *     "steele",
   *     "bratschi"
   *   ],
   *   "sessionActive": true,
   *   "leaderboard": [{"blue monkey": 12}],
   *   "roundNumber": 3,
   *   "number": "+18004005000",
   *   "lastWinner": "Winner Alias"
   * }
   */
  // getMetadata() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         sessionActive: true,
  //         leaderboard: [{ "blue monkey": 12 }],
  //         roundNumber: 3,
  //         number: "+18004005000",
  //         lastWinner: "Winner Alias"
  //       });
  //     }, 150);
  //   });
  // }

  getMetadata() {
    return axios
      .get("https://ef3df964.ngrok.io/data/meta")
      .then(response => response.data);
  }
};

export default GameService;
