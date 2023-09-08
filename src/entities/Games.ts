import Genres  from "./Genres";
import  Platform  from "./Platform";
import  Publisher  from "./Publisher";


export default interface Games {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  genres: Genres[];
  publisher:Publisher[]
  description_raw: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
