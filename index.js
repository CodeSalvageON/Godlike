// Godlike add-on for i-Ready
// Created by CodeSalvageON and Arjhan Toteck

const favicon = document.querySelector("link[rel*='icon']") || document.createElement("link");

favicon.type = "image/x-icon";
favicon.rel = "shortcut icon";
favicon.href = "https://media.discordapp.net/attachments/757231447172972606/758669954555576330/220px-Kmfdmgodlike.png";

function createGUI () {
  document.getElementById("background-image").src = "https://media.discordapp.net/attachments/757231447172972606/777658230380822538/81uilGLQYBL.png?width=671&height=671";
  document.getElementsByTagName("head")[0].appendChild(favicon);
}

createGUI();
