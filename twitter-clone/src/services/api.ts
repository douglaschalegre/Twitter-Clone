import axios from 'axios';
const baseURL = 'http://localhost:1337';

export function likeTweet(id: string) {
  return axios.put(`${baseURL}/tweets/like`, {
    id,
  });
}

export function findProfile(id: number) {
  return axios.get(`${baseURL}/user/${id}`);
}

export function findTweetsFromUser(id: number) {
  return axios.get(`${baseURL}/TweetsFromUser/${id}`);
}

export function tweet(content: string) {
  return axios.post(`${baseURL}/tweets/tweetar`, {
    content,
    authorId: 1,
    retweet: false,
  });
}
