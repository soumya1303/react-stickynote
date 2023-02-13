import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote]=useState({title:"", content:""});  

    const handleChange=(e)=>{

        const {name, value} = e.target;

        setNote((prevStat)=>{
            return({...prevStat, [name]:value});
        });
        
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={(e)=>{
            e.preventDefault();
            props.func(note);
            setNote({title:"", content:""});    
        }}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
