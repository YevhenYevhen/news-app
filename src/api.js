import axios from "axios";

export const getArticles = () => axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=50').then(res => res.data)
 



 



 




