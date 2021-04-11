import { useEffect, useState } from "react";
import { fetchTimeline, sendTweet } from "./api/tweets";
import Draft from "./components/Draft";
import Timeline from "./components/Timeline";
import TweetData from "./types/tweetData";

const App = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [shouldReload, setShouldReload] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchTimeline();
      setShouldReload(false);
      setTweets(response);
    };
    fetch();
  }, [shouldReload]);

  const send = (tweet: TweetData) => {
    setShouldReload(true);
    return sendTweet(tweet);
  };

  return (
    <div className="bg-gray-100">
      <Draft sendTweet={send} />
      <Timeline tweets={tweets} />
    </div>
  );
};

export default App;
