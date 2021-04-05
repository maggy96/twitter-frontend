import axios from "axios"
import TweetData from "../types/tweetData";

export const fetchTimeline = async (): Promise<TweetData[]> => {
  try {
    const response = await axios.get('http://localhost:9001/tweets');
    return response.data;
  } catch (error) {
    return [];
  }
}
