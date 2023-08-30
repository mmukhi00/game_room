import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/api-client";
 import ms from 'ms'
const apiClient=new ApiClient('./platforms/lists/parents')

export interface Platform{
    id:number;
    name:string;
    slug:string
}

const usePlatform=()=>useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
     staleTime:ms('24h'),
     initialData:platforms
})

export default usePlatform