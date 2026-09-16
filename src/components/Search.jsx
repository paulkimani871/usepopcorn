import React from 'react'

function Search({query, setQuery}) {
  return (
        <input value={query} onChange ={(e) => setQuery(e.target.value)} className='search' type="text" placeholder="Search movies..." />
     )
}

export default Search