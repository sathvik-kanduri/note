import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import './Note.css'
function Note({objs,remove,search})
{
    console.log(objs);
    return(
        <div className='wrapper'>
        {
            objs.filter(obj=>obj.text.toLowerCase().includes(search.toLowerCase())).map((obj)=>{
                return (
                <div className='note'>
                
                <p className='text'>{obj.text}</p>
                <div className='time'>
                <p>{obj.date}</p>
                <MdDeleteForever onClick={()=>remove(obj.id)} className='delete' size={23}></MdDeleteForever>
                </div>
                </div>
                )
            })
        }
        
        </div>
    )
}

export default Note;