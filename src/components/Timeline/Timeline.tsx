import React from "react";
import TweetData from "../../types/tweetData";
import Tweet from "../Tweet";

type TimelineProps = {
  tweets: TweetData[];
};

export const Timeline = ({ tweets }: TimelineProps) => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      {tweets.map((x) => (
        <Tweet {...x} />
      ))}
    </div>
  );
};
