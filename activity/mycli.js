// commands -> view  --tree, --flat
            //organize-> same folder, multiple folder
            // help
// node mycli.js view dirName mode
// node mycli.js help
// node mycli.js help
let helpFile=require("./commands/help");
let {organizeFn} =require("./commands/organize")
let {viewFn} =require("./commands/view");

let input = process.argv.slice(2);
let cmd =input[0];

switch(cmd) {
    case "view":
       viewFn();
        break;
    case "organize":
        organizeFn();
        break;
    case "help":
        helpFile.helpFn();
        break;
    default:
        console.log("Wrong command enter help to see list of all commands ");
        break;

}
