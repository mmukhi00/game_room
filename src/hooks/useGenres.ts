
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";

const apiClient=new ApiClient<Genres>('/genres')

export interface Genres {
  id: number;
  name: string;
  image_background:string
}

const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:apiClient.getAll,
  staleTime:24*60*60*1000,
  initialData:genres
})

export default useGenres;
