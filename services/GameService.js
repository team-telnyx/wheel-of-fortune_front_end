import axios from "axios";

const GameService = {
  postSession() {
    ///return Promise.resolve({
    ///  words: [
    ///    ["b", "-", "-", "n", "g"],
    ///    ["y", "o", "u", "r"],
    ///    ["o", "w", "-"],
    ///    ["c", "a", "r", "r", "i", "e", "r"]
    ///  ]
    ///});
    return axios.post("http://localhost:3001/data/letter").then(
      response =>
        console.log(response) || {
          words: response.data.phrase
        }
    );
  },

  getMetadata() {
    ///return Promise.resolve({
    ///  winners: [
    ///    { phoneNumber: "+5513997598554" },
    ///    { phoneNumber: "+5513997598534" }
    ///  ],
    ///  sessionActive: true,
    ///  leaderboard: [{ "blue monkey": 12 }],
    ///  roundNumber: 3,
    ///  number: "+18004005000",
    ///  lastWinner: "Winner Alias"
    ///});
    return axios
      .get("http://localhost:3001/data/meta")
      .then(response => response.data);
  }
};

export default GameService;
