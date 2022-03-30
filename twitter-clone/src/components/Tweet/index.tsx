import React, { useEffect, useState } from 'react';
import { likeTweet, findProfile } from '../../services/api';
import {
  Container,
  Retweeted,
  Rt,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

interface Props {
  retweet: boolean;
  content: string;
  authorId: number;
  likes: number;
  comments: number;
  retweets: number;
  createdAt: string;
  image: string;
  id: string;
}
export default function Tweet({
  retweet,
  content,
  authorId,
  likes,
  retweets,
  comments,
  createdAt,
  image,
  id,
}: Props) {
  function handleLike(id: string) {
    likeTweet(id);
    let newLikes = likesState + 1;
    setLikesState(newLikes);
  }

  const [user, setUser] = useState([]);
  const [likesState, setLikesState] = useState(likes);

  useEffect(() => {
    try {
      findProfile(authorId).then((response) => {
        let rawData = response.data;
        setUser(rawData);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      {retweet && (
        <Retweeted>
          <Rt />
          Você retweetou
        </Retweeted>
      )}
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{user.name}</strong>
            <span>@{user.username}</span>
            <Dot />
            <time>{createdAt}</time>
          </Header>
          <Description>{content}</Description>
          {image && <ImageContent />}
          <Icons>
            <Status>
              <a>
                <CommentIcon />
                {comments}
              </a>
            </Status>
            <Status>
              <a>
                <RetweetIcon />
                {retweets}
              </a>
            </Status>
            <Status>
              <a
                onClick={() => {
                  handleLike(id);
                }}
              >
                <LikeIcon />
                {likesState}
              </a>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
