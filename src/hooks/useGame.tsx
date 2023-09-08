import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import  Games  from "../entities/Games"

const apiClient=new  ApiClient<Games>('/games')
const useGame = (slug: string) => useQuery({
    querykey: ['games', slug],
    queryFn:()=>apiClient.get(slug)

    
})

export default useGame