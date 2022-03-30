import styled, { css } from 'styled-components';
import { Chat, Heart, Retweet } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis; // ... quando não couber o texto
    overflow: hidden;
  }
`;
export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;
export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; // Mobile

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > a {
    > svg {
      margin-right: 5px;
    }
  }

  &:nth-child(1) {
    &,
    > a svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    a {
      color: var(--retweet);
    }
    > a svg path {
      color: var(--retweet);
    }
  }
  &:nth-child(3) {
    a {
      color: var(--like);
    }
    > a svg path {
      color: var(--like);
    }
  }
`;

export const Rt = styled(Retweet)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;
`;

const iconCss = css`
  width: 19px;
  height: 19px;
  color: var(--gray);
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCss}
`;

export const CommentIcon = styled(Chat)`
  ${iconCss}
`;

export const LikeIcon = styled(Heart)`
  ${iconCss}
`;
