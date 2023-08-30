import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
import ms from 'ms'
const apiClient=new ApiClient<Games>('/games')

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:Platform}[];
  metacritic: number;
  rating_top:number
}
const useGames =(gameQuery:GameQuery) =>useInfiniteQuery<FetchResponse<Games>,Error>({
  queryKey:['games',gameQuery],
  queryFn:({pageParam=1})=>apiClient.getAll({
    params:{  genres:gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText,
    page:pageParam}
    }),
    getNextPageParam:(lastPage,allPage)=>{
      return lastPage.next?allPage.length+1:undefined
    },
    staleTime:ms('24h') //24 hrs
 
})


export default useGames;
