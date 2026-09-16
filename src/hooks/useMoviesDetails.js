import { useEffect, useState } from "react"
const KEY = "f84fc31d";

 export function useMovieDetails(selectedId){
      const [movie,setMovie] = useState({})
        const [isLoading,setIsLoading] = useState(false)


  useEffect(()=>{
      async function getMovieDetails (){
          try {
              setIsLoading(true)
              const res = await fetch (`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
              const data = await res.json()
              setMovie(data)
              setIsLoading(false)
          } catch (error) {
             console.error(error);
              
          }
      }
      getMovieDetails()
  
  },[selectedId])

  return {movie,isLoading}

       
      
} 