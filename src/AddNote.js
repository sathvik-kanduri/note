import React, { useState } from 'react'
import Note from './Note';
import './AddNote.css';
import Search from './Search';


let id=0;
function AddNote()
{
  
  const [text,setText]=useState("");
  const [objs,setObjs]=useState([]);
  const [search,setSearch]=useState("");
  
  
  function onchange(even)
  {
    
    const value=even.target.value;
    setText(text=>value);
  }

  function remove(id)
  {
      const filtered=objs.filter((item)=> item.id!==id)
      setObjs(filtered);
  }
function submit(event)
{
  const date = new Date();
  id++;
 

  const obj={
    text,
    id,
    date: date.toLocaleDateString(),
    
  }
  setObjs([...objs,obj]);
  
}

    return (
      <>
       <Search setSearch={setSearch} />
     <div className='Add'>
      
      <textarea id="Skills" rows="10" cols="165" placeholder="Type to add a note" value={text} onChange={onchange} ></textarea>
      <br></br>
      <button onClick={()=>submit()}>Save</button> 
     
     </div>
     <Note objs={objs} remove={remove} search={search} />
     </>
    )
}

export default AddNote;









