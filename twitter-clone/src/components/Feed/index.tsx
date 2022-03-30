import React, { useEffect, useState } from 'react';
import Tweet from '../Tweet';
import { Container, Tab, Tweets } from './styles';
import { findTweetsFromUser } from '../../services/api';

export default function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      findTweetsFromUser(1).then((response) => {
        let rawTweets = response.data;
        rawTweets.reverse();
        setTweets(rawTweets);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(tweets);
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        {tweets?.map((tweet) => (
          <Tweet
            retweet={tweet.retweet}
            content={tweet.content}
            authorId={tweet.authorId}
            likes={tweet.likes}
            comments={tweet.comments}
            retweets={tweet.retweets}
            createdAt={tweet.createdAt}
            image={tweet.image}
            id={tweet.id}
            key={tweet.id}
          />
        ))}
      </Tweets>
    </Container>
  );
}
