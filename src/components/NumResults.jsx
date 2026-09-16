import React from 'react'

function NumResults({movies}) {
  return (
<div className="num-results">
        <p>Found {movies.length} movies</p>
      </div>  )
}

export default NumResults