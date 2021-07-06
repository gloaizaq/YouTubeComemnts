import axios from "axios"

const getComments = async (videoId) => {
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";
    return await axios.get(BASE_URL + 'commentThreads', 
        {
            params: {
                part: 'snippet',
                videoId,
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
            }
        }
    );
}

export { getComments };