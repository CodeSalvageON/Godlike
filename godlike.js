// Godlike Add-on

const command_list = `
help - Lists all commands.
`;

function createShell () {
  alert("Type help for all commands.");
  let shell_prompt = prompt("Command: ");
  
  if (shell_prompt.toLowerCase() === "help") {
    alert(command_list);
  }
}
