import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';
import { useMovieDetails } from '../hooks/useMoviesDetails';
function MovieDetails({selectedId,onCloseMovie,onAddWatched,watched}) {
    const {movie, isLoading} = useMovieDetails(selectedId)
    console.log(movie);
    
  const [userRating,setUserRating] = useState ("")
  const isWatched =  watched.map(movie=> movie.imdbID).includes(selectedId)
  const watchedUserRating = watched.find(movie=> movie.imdbID === selectedId)?.userRating
  const {
    Title: title,
    Year: year,
    Poster:poster,
    Runtime: runtime,
    imdbRating,
    Plot:plot,
    Released:released,
    Actors:actors,
    Director:director,
    Genre:genre,
  } = movie
//   console.log(movie);
  

function handleAdd(){
   const newWatchedMovie = {imdbID:selectedId,
    title,
    year,
    poster,
    imdbRating:Number(imdbRating),
    runtime:Number(runtime.split(" ").at(0)),
    userRating
}


    onAddWatched(newWatchedMovie)
    onCloseMovie()
}

    return (
    <div className="details">
    <header>
        <button className='btn-back'>
            &larr;
        </button>
        <img src={poster} alt={`Poster off ${title} movie`} />
        <div className='details-overview'>
            <h2>{title}</h2>
            <p>{released} &bull; {runtime}</p>
            <p>{genre}</p>
            <p>
                <span>⭐</span>
                {imdbRating}  IMDb rating 
            </p>
        </div>
    </header>
    <section>

        <div className='rating'> 
           {!isWatched ? <>
           <StarRating maxRating={10} size={24} onSetRating={setUserRating}/>
           {userRating>0 &&  <button className='btn-add' onClick={handleAdd}> + Add to list </button>}
           </>: <p>you rated with movie {watchedUserRating} <span>⭐</span> </p>}

        </div>
        <p>
            <em>
                {plot}
            </em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
    </section>
    </div>
  )
}

export default MovieDetails