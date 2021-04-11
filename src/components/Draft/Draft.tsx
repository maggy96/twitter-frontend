import { useState } from "react";
import TweetData from "../../types/tweetData";

interface DraftProps {
  sendTweet: (data: TweetData) => Promise<void>;
}
export const Draft = ({ sendTweet }: DraftProps) => {
  const [text, setText] = useState("");
  const send = () => {
    sendTweet({
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      date: new Date(),
      displayName: "admin",
      likes: 0,
      retweets: 0,
      text,
      userName: "admin",
      verified: false,
    });
    setText("");
  };
  return (
    <div className="py-8 px-4 max-w-xl mx-auto bg-white sm:py-4 rounded-md shadow-md sm:flex sm:items-start space-y-2  sm:space-y-0 sm:space-x-6">
      <img
        alt="avatar"
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      ></img>
      <div className="flex flex-col w-full">
        <div className="text-center space-y-2 sm:text-left">
          <textarea
            className=" bg-transparent text-gray-400 font-medium text-lg w-full"
            onChange={(x) => setText(x.target.value)}
            placeholder="What's happening?"
            rows={2}
            value={text}
          ></textarea>
        </div>
        <button
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={send}
        >
          {" "}
          Tweet{" "}
        </button>
      </div>
    </div>
  );
};
