import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:Platform}[];
  metacritic: number;
  rating_top:number
}

const useGames =(gameQuery:GameQuery) =>useQuery<FetchResponse<Games>,Error>({
  queryKey:['games',gameQuery],
  queryFn:()=>apiClient.get('/games',{
    params:{
      genres:gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText
    }
  }).then(res=>res.data)
})


export default useGames;
