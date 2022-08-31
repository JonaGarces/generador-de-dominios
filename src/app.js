alert("hola que hace");
/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["The", "Our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let o = 0; o < adj.length; o++) {
    for (let p = 0; p < noun.length; p++) {
      console.log(pronoun[i] + adj[o] + noun[p]);
    }
  }
}
console.log("hola");
