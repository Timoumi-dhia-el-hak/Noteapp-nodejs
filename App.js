const yargs=require('yargs');
const notes = require('./note.js');
const argv= yargs.argv;
//alias("title","t")
 let title = argv.title;
 let body = argv.body;
let command=argv._[0];

if (command === "add") {
   
    notes.addNote(title, body);
  } else if (command === "remove") {
    
    notes.removeNote(title);
  } else if (command === "read" ) {
    
    notes.readNote(title);
  } else if (command === "list") {
    
    notes.listNote();
  } else {
    console.log('\n\n---------FOR ADDING NEW LIST :\n'+
    'node app.js add -t newtiltle -b newbody\n'+ 
     'or\n'+
     'node app.js add --tille newtitle --body newbody\n\n\n'+
    '---------FOR LIST ALL NOTE\n'+
    'node app.js list\n\n\n'+
    '---------FOR ROMOVE A NOTE\n'+
    'node app.js remove --tille title\n'+
    'or\n'+
    'node app.js remove -t title\n\n\n'+
    '---------FOR READ A SPECIFIC NOTE\n'+
    'node app.js read --tille title\n'+
    'or\n'+
    'node app.js read -t title\n\n\n')
  }