import React from "react";
import TweetData from "../../types/tweetData";
import Tweet from "../Tweet";

type AppProps = {
  tweets: TweetData[];
};

export const Timeline = ({ tweets }: AppProps) => {
  return (
    <div>
      {tweets.map((x) => (
        <Tweet {...x} />
      ))}
    </div>
  );
};
