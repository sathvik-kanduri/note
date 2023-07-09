import React from 'react'
import { MdSearch } from "react-icons/md"
import './search.css'
function Search({setSearch}) {
    
  return (
    <div className='search'>
      
      <MdSearch className='material-icons' size={25} />
      <input type='text' onChange={(e)=>{setSearch(e.target.value)}} placeholder='type to search'></input>
      
    </div>
  )
}

export default Search
