// Godlike Add-on

let windowObjectReference;
let windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

const command_list = `
help - Lists all commands.
change_icon - Allows the user to change the page icon.
change_bg_color - Allows the user to change the page's background color.
change_bg_img - Allows the user to change the page's background image.
open_lesson_iframe - Opens the original lesson's source in a new tab. Comes in handy more than you think.
open_iready_login - Opens i-Ready in different tabs.
`;

function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: href,
  }).click();
}

function createShell () {
  alert("Type help for all commands.");
  let shell_prompt = prompt("Command: ");
  
  if (shell_prompt.toLowerCase() === "help") {
    alert(command_list);
  }
  
  else if (shell_prompt.toLowerCase() === "change_icon") {
    const icon_prompt = prompt("Icon Image Link: ");
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = icon_prompt;
    
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  
  else if (shell_prompt.toLowerCase() === "change_bg_color") {
    const bg_color_prompt = prompt("Background Color: ");
    
    document.querySelector("body").style.backgroundColor = bg_color_prompt;
  }
  
  else if (shell_prompt.toLowerCase() === "change_bg_img") {
    const bg_img_prompt = prompt("Background Image Link: ");
    
    document.querySelector("body").style.backgroundImage = `url("` + bg_img_prompt + `")`;
  }
  
  else if (shell_prompt.toLowerCase() === "open_lesson_iframe") {
    const iframe = document.querySelector("iframe").src;
    
    openInNewTab(iframe);
  }
}
