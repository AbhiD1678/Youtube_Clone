import axios from 'axios'

const Base_Url='https://youtube-v31.p.rapidapi.com'
const options = {

    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '408257bdf6msha4ef511fc60e000p174d4bjsn535224dbace1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
    const {data} = await axios.get(`${Base_Url}/${url}`,options)

    return data;
}