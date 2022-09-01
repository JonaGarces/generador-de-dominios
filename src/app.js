/* eslint-disable */

let pronoun = ["The", "Our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".cl", ".com", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let o = 0; o < adj.length; o++) {
    for (let p = 0; p < noun.length; p++) {
      for (let a = 0; a < dom.length; a++) {
        console.log(pronoun[i] + adj[o] + noun[p] + dom[a]);
      }
    }
  }
}
