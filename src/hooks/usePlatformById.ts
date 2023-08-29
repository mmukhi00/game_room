import usePlatform from '../hooks/usePlatform'


const usePlatformById=(id?:number)=>{
    const {data:platforms}=usePlatform()
    return platforms?.results.find(p=>p.id===id)

}

export default usePlatformById