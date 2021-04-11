import axios from "axios"
import TweetData from "../types/tweetData";

export const fetchTimeline = async (): Promise<TweetData[]> => {
  try {
    const response = await axios.get('http://localhost:3000/tweets');
    return response.data;
  } catch (error) {
    return [];
  }
}

export const sendTweet = async (tweet: TweetData): Promise<void> => {
  try {
    await axios.post(
      'http://localhost:3000/tweet', tweet
    );
  } catch (error) {
    console.error(error);
  }
}
