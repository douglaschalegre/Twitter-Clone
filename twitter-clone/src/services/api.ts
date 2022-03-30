import axios from 'axios';
const baseURL = 'http://localhost:1337';

export function likeTweet(id: string) {
  // const params = new URL.URLSearchParams({ foo: 'bar' });
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
