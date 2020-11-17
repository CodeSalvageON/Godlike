// Godlike add-on for i-Ready
// Created by CodeSalvageON and Arjhan Toteck

const favicon = document.querySelector("link[rel*='icon']") || document.createElement("link");
const gui = `
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
<style>
.addon_button {
  color: white;
  background-color: black;
  border: 1px solid white;
  font-family: 'Roboto Mono', monospace;
}

.addon_button:hover {
  color: black;
  background-color: white;
}
</style>
<button class="addon_button" onclick="changeBackgroundImage()">Change Background Image</button><button class="addon_button" onclick="changeBackgroundColor()">Change Background Color</button><button class="addon_button" onclick="changeIcon()">Change Icon</button>
`;

favicon.type = "image/x-icon";
favicon.rel = "shortcut icon";
favicon.href = "https://media.discordapp.net/attachments/772064957793435678/777660399821652008/bomb_PNG16.png";

function createGUI () {
  document.getElementById("background-image").src = "https://media.discordapp.net/attachments/757231447172972606/777658230380822538/81uilGLQYBL.png?width=671&height=671";
  document.getElementsByTagName("head")[0].appendChild(favicon);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "red";
  
  document.getElementById("AW-CHOOSE_SUB").style.backgroundColor = "black";
  document.getElementById("AW-CHOOSE_SUB").style.color = "red";
  
  document.getElementById("main-section").innerHTML = gui + document.getElementById("main-section").innerHTML;
  document.getElementById("lesson-view").innerHTML = gui + document.getElementById("lesson-view").innerHTML;
}

function changeBackgroundImage () {
  let background_image_prompt = prompt("Background Image Link: ");
  
  if (background_image_prompt === null || background_image_prompt === undefined || background_image_prompt === "") {
    return false;
  }
  
  else {
    document.getElementById("background-image").src = background_image_prompt;
  }
}

function changeBackgroundColor () {
  let background_color_prompt = prompt("Background Color: ");
  
  if (background_color_prompt === null || background_color_prompt === undefined || background_color_prompt === "") {
    return false;
  }
  
  else {
    document.querySelector("body").style.backgroundColor = background_color_prompt;
  }
}

function changeIcon () {
  let icon_prompt = prompt("Icon Image Link: ");
  
  if (icon_prompt === null || icon_prompt === undefined || icon_prompt === "") {
    return false;
  }
  
  else {
    favicon.href = icon_prompt;
    
    document.getElementsByTagName("head")[0].appendChild(favicon);
  }
}

createGUI();
