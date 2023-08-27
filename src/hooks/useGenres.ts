
import genres from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  image_background:string
}

// const useGenres = () => useData<Genres>('/genres')
const useGenres = () => ({data:genres, isloading:false,error:null})

export default useGenres;
