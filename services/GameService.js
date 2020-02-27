import axios from "axios";

const GameService = {
  /**
   * example response {words: [[b,r,i,n,g], [y,o,u,r], [o,w,n], [c,a,r,r,i,e,r]]}
   */

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

  getMetadata() {
    return axios
      .get("https://ef3df964.ngrok.io/data/meta")
      .then(response => response.data);
  }
};

export default GameService;
