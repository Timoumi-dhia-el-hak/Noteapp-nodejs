const fs= require('fs')

let  fetchNotes = () => {
    try {
      return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err) {
      return [];
    }
  }
let addNote=(title,body)=>{
    let notes= fetchNotes();
    let note={
        title,
        body
    };
    if(title!==""){
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    console.log("note created");
    logNote(notes[notes.length-1]);}
    else{console.log('\n\n---------FOR ADDING NEW LIST :\n'+
    'node app.js add -t newtiltle -b newbody\n'+ 
     'or\n'+
     'node app.js add --tille newtitle --body newbody\n\n\n');}
}
let removeNote = (title) => {
    let notes = fetchNotes();
 if(title !==" "){
    console.log('---------FOR ROMOVE A NOTE\n'+
    'node app.js remove --tille title\n'+
    'or\n'+
    'node app.js remove -t title\n\n\n');
    }
    else{
        let filteredNotes = notes.filter((note) => note.title !== title);
        console.log("note was removed");
        fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));  
    }
  }
  
  let readNote = (title) => {
    let notes = fetchNotes();
    
  try{
    let filteredNotes = notes.filter((note) => note.title === title);
  
    logNote(filteredNotes[0]);
  }
  catch (err){
      console.log('---------FOR READ A SPECIFIC NOTE\n'+
      'node app.js read --tille title\n'+
      'or\n'+
      'node app.js read -t title\n');
  }
    
  }
  
  let listNote = () => {
    let notes = fetchNotes();
    console.log(`Printing ${notes.length} note(s)`);
    notes.forEach((note) => logNote(note));
  }
  
  let logNote = (note) => {
        console.log("********************************");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }
  
  
  module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
  }
