/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
var pronoun = ["the", "our"];
var adj = ["great", "big", "fabulous"];
var noun = ["jogger", "racoon", "president"];
var ext = [".com", ".net", ".us", ".io"];

let pr;
let ad;
let no;
let ex;
let dominios;

for (let i = 0; i < pronoun.length; i++) {
  pr = pronoun[i];
  for (let i2 = 0; i2 < adj.length; i2++) {
    ad = adj[i2];
    dominios = pr.concat(ad);

    for (let i3 = 0; i3 < noun.length; i3++) {
      no = noun[i3];
      dominios = pr.concat(ad, no);

      for (let i4 = 0; i4 < ext.length; i4++) {
        ex = ext[i4];
        dominios = pr.concat(ad, no, ex);
        console.log(dominios);
      }
    }
  }
}
