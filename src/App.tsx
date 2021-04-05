import { useEffect, useState } from 'react';
import { fetchTimeline } from './api/timeline';
import './App.scss';
import Timeline from './components/Timeline';
import TweetData from './types/tweetData';

const App = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  useEffect(() => {
    const fetch = async() => {
      const response = await fetchTimeline();
      setTweets(response);
    };
    fetch();
  }, [])

  return (
    <div className="App">
      <Timeline tweets={tweets}/>
    </div>
  );
}

export default App;
