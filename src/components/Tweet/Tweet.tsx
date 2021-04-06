import TweetData from "../../types/tweetData";

export const Tweet = ({
  displayName,
  likes,
  retweets,
  text,
  time,
  userName,
  avatar,
}: TweetData) => (
    <div className="py-8 px-4 max-w-xl mx-auto bg-white sm:py-4 rounded-md shadow-md my-3 sm:flex sm:items-start space-y-2  sm:space-y-0 sm:space-x-6">
      <img
        alt="avatar"
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={avatar}
      ></img>
      <div className="text-center space-y-2 sm:text-left">
        <p className="text-lg text-black">
          <b>{displayName}</b>{" "}
          <span className="text-gray-500 font-normal">@{userName}</span>
        </p>
        <p>{text}</p>
        <div className="flex w-full justify-between">
          <p>
            <i className="far fa-comment"></i>
          </p>
          <p>
            <i className="fas fa-retweet"></i> {retweets}{" "}
          </p>
          <p>
            <i className="far fa-heart"></i> {likes}
          </p>
          <p>
            <i className="far fa-share-square"></i>
          </p>
        </div>
      </div>
    </div>
);
