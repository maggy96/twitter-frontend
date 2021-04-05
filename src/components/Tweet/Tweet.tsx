import TweetData from "../../types/tweetData";
import "./tweet.scss";

export const Tweet = ({
  displayName,
  likes,
  retweets,
  text,
  time,
  userName,
  avatar,
}: TweetData) => (
  <div className="tweet">
    <img className="avatar" src={avatar}></img>
    <div className="textarea">
    <p className="userheader">
      <b>{displayName}</b> <span className="handle">@{userName}</span>
    </p>
    <p>{text}</p>
    <p className="actions">
      <i className="fas fa-retweet"></i> {retweets} <i className="far fa-heart"></i> {likes}
    </p>

    </div>
  </div>
);
