const GameService = {
  /**
   * example response {words: [[b,r,i,n,g], [y,o,u,r], [o,w,n], [c,a,r,r,i,e,r]]}
   */
  postSession() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          words: [
            ["b", undefined, undefined, "n", undefined],
            [undefined, "o", undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined]
          ]
        });
      }, 150);
    });
  },

  /**
   * example response
   * {
   *   "winners": [],
   *   "sessionActive": true,
   *   "leaderboard": [{"blue monkey": 12}],
   *   "roundNumber": 3,
   *   "number": "+18004005000",
   *   "lastWinner": "Winner Alias"
   * }
   */
  getMetadata() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          winners: [],
          sessionActive: true,
          leaderboard: [{ "blue monkey": 12 }],
          roundNumber: 3,
          number: "+18004005000",
          lastWinner: "Winner Alias"
        });
      }, 150);
    });
  }
};

export default GameService;
