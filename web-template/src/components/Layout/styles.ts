import styled from 'styled-components';
import { ArrowLeft } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const CloseRow = styled.div`
  display: flex;
`;
export const TextRow = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 70% 25%;
`;
export const TextInput = styled.input`
  &:focus {
    outline: none;
  }
`;

export const CloseIcon = styled(ArrowLeft)`
  width: 31px;
  height: 31px;

  cursor: pointer;
  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;
