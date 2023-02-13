import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  const addNote=(newNote)=>{
    setNotes((prevState)=>{
      return([...prevState, {title:newNote.title, content:newNote.content}]);
    });
  }
  const deleteNote=(indx)=>{

    setNotes(notes.filter((e, index)=>{
      console.log(`${e.title} ${e.content} ${index}`);
      return(index!==indx);
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea func={addNote}/>
      {
        notes.map((e, indx)=>{
        return(<Note id={indx} key={indx} title={e.title} content={e.content} func={deleteNote}/>);
      })
      }
      <Footer />
    </div>
  );
}

export default App;
