# Telnyx March 2020 Hackathon Project Front End

## Requirements to Run:
1. [Game Back End](https://github.com/team-telnyx/telnyx_hackathon_2020_A_Team)
2. [node >12.1](https://nodejs.org/en/download/)

### The A Team
- [Badal Moradia](https://github.com/badal-moradia)
- [Enzo Piacenza](https://github.com/enzoqtvf)
- [Gero Stanchev](https://github.com/gesta)
- [Hugo Oliveira](https://github.com/hugobessaa)
- [Vlad Ionash](https://github.com/vionash)

**The A Team** project that's going to win the inaugural Telnyx hackathon 2020!

### Background

Telnyx held a 24hr internal hackathon competition and the winner was the team that created the most unique project using our own APIs and Products. Our team chose to make a game that was similar to the [Tossup Round in Wheel of Fortune](https://wheeloffortunehistory.fandom.com/wiki/Gameplay_elements#Toss-Ups).

A board that's shown to the players with a word or phrase, except all the characters are just blanks. Every 15 seconds, a letter is flipped and shown the players. The first player to guess the entire word/phrase wins.

> **Note** This project is not polished or finished. The core logic was created in 24 hours by the team members. A few things were adjusted and cleaned up in the docs, comments, and configurations to make it ok for open-source release, but the underlying logic was untouched. Feel free to play around and try to get the #TODOs implemented!

## Back-End Interaction:

The backend has 4 endpoints:

- Telnyx Webhooks (inbound messages) (POST /webhook)
i. Where inbound webhooks from players are received
- Telnyx admin Webhooks (admin) (POST /admin-webhook)
i. Where inbound webhooks from the admin are received.
- Uncover new letter (frontend) (POST /data/letter)
i.  The front-end also polls the `/data/letter` endpoint every 15 seconds to get a new letter.
- Polling endpoint (frontend) (GET /data/meta)
i. The front-end polls the `/data/meta` endpoint every second to get information about new winners and if the game has ended.



## Getting Started

First, run the development server:

```bash
yarn && yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the game.

> **Note** This will start the front-end of the game. You will also need to run the [back-end](https://github.com/team-telnyx/telnyx_hackathon_2020_A_Team) to be able to play the game.


Players can start to try and guess the word/phrase by texting the number that appears on the screen.

Good luck and have fun!
