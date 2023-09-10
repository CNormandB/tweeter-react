import Tweet from './Tweet'

function TweetList(props) {
 
const tweet = {
  avatar: "https://i.imgur.com/73hZDYK.png",
  firstName: "Isaac",
  lastName: "Newton",
  handle: "@SirIsaac",
  body: "If I have seen further it is by standing on the shoulders of giants",
  age: "10 days ago"
};

  return (
    <section className="tweets">
      <article className="tweet">
        <Tweet tweet={tweet} />
        <Tweet tweet={tweet} />
      </article >
    </section >
  );
}

export default TweetList;