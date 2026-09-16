import React from 'react'

function WatchedMovieList({watched,onDeleteWatched}) {
  return (
<ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                    <button className='btn-delete' onClick={()=>onDeleteWatched(movie.imdbID)}>X</button>
                  </li>
                ))}
              </ul>  )
}

export default WatchedMovieList