import styled, { css } from 'styled-components';
import { Calendar, LocationOn } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: none;
  /* Chrome */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);
  position: relative;
`;
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  margin-left: 15px;
`;
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;

  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
  }
  > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    > li {
      font-size: 15px;
      color: var(--gray);
      margin-right: 20px;
      > svg {
        fill: var(--gray);
        margin-right: 4px;
      }
    }
  }
`;
export const Followage = styled.div`
  display: flex;
  > span {
    font-size: 15px;
    color: var(--gray);
    & + span {
      margin-left: 20px;
    }
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;
export const CalendarIcon = styled(Calendar)`
  ${iconCss}
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    paddin: 10px 19px;
    font-size: 15px;
  }
`;
