import React from "react";
import TweetData from "../../types/tweetData";
import Tweet from "../Tweet";

type AppProps = {
  tweets: TweetData[];
};

export const Timeline = ({ tweets }: AppProps) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {tweets.map((x) => (
        <Tweet {...x} />
      ))}
    </div>
  );
};
