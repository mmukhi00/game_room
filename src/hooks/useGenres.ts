
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'
import { Genres } from "../entities/Genres";
const apiClient=new ApiClient<Genres>('/genres')

const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:apiClient.getAll,
  staleTime:ms('24h'),
  initialData:genres
})

export default useGenres;
