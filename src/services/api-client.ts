import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next:string|null;
  results: T[];
}
const apiInstance=axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0e2e20a649d84e4db8d5594888066b73"
  }
});

class ApiClient<T>{
  endpoint:string
  constructor(endpoint:string)
  {
    this.endpoint=endpoint;
  }
    getAll=(config: AxiosRequestConfig)=>{
   return  apiInstance.get<FetchResponse<T>>(this.endpoint,config).then(res=>res.data)
   }

  get = (id: number|string) => {
    return apiInstance.get<T>(this.endpoint+'/'+id).then(res=>res.data)
  }
}

export default ApiClient;

