import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieDetails from "./components/MovieDetails";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useMovies } from "./hooks/useMovies";


const KEY = "f84fc31d";

export default function App() {
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorageState([],"watched");
  const [selectedId,setSelectedId] = useState(null)

  const {movies, isLoading, error} = useMovies(query)

  // useEffect(function () {
  //   console.log("after Initial render");
  // }, []);
  // useEffect(function () {
  //   console.log("after every render");
  // });
  // useEffect(
  //   function () {
  //     console.log("after query changes");
  //   },
  //   [query],
  // );
  // console.log('during render')

  
function handleSelectMovie(id){
  setSelectedId((selectedId)=> id === selectedId ? null : id)

}
function handleCloseMovie(){
  setSelectedId(null)
}
function handleAddWatched(movie){
  setWatched((watched)=>[movie,...watched])
}
function handleDeleteWatched(id){
  setWatched((watched)=> watched.filter(movie => movie.imdbID !== id ))
}


  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : !movies.length ? (
            <p className="error">No movies found</p>
          ) : (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>

        <Box>
          {selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched}/>:
          
          
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched} />
          </>
          }
        </Box>
      </Main>
    </>
  );
}
