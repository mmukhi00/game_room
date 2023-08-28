
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background:string
}

// const useGenres = () => useData<Genres>('/genres')
const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:()=>apiClient.get<FetchResponse<Genres>>('/genres').then(res=>res.data),
  staleTime:24*60*60*1000,
  initialData:{count:genres.length,results:genres}
})

export default useGenres;
