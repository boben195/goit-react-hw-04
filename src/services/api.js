import axios from "axios";
//const KEY = "J45Ogh-SbLTYrntIQPAfuPykzp1ekX8V8RBMSrDSaGw"
// export const requestImages = async (query, page) => {
//     const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=J45Ogh-SbLTYrntIQPAfuPykzp1ekX8V8RBMSrDSaGw&page=${page}&query=${query}`
//         // `https://api.unsplash.com/search/photos?query=${query}&page=${page}`, {
//         //     headers: {Authorization: `Client-ID ${KEY}`,},
//         // }
//     )
        
//     return data
    
// }
axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "J45Ogh-SbLTYrntIQPAfuPykzp1ekX8V8RBMSrDSaGw";

export const requestImages = async (query, page) => {
    const resp = await axios.get('search/photos', {
        params: {
            query: query,
            page: page,
            client_id: ACCESS_KEY,
        },
    })
    return {data: resp.data.results}
}

