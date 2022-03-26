import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  ModalContainer,
  CloseRow,
  CloseIcon,
  TextRow,
  TextInput,
} from './styles';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
import Modal from 'react-modal';
import Button from '../Button';
import { tweet } from '../../services/api';

Modal.setAppElement('#root');

export default function Layout() {
  const [showModal, setShowModall] = useState(false);
  const [tweetContent, setTweetContent] = useState();
  function handleOpenModal() {
    setShowModall(true);
  }

  function handleCloseModal() {
    setShowModall(false);
  }

  function handleTweetar(content: string) {
    tweet(content).then(alert('Tweet enviado com sucesso!'));
  }
  function handleChangeText(
    e: React.SetStateAction<string> | React.ChangeEvent<HTMLInputElement>
  ) {
    setTweetContent(e);
    console.log(e);
  }
  return (
    <Container>
      <Wrapper>
        <MenuBar handleOpenModal={handleOpenModal} />
        <Main />
        <SideBar />
        <Modal
          isOpen={showModal}
          contentLabel=''
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: 'rgba(91, 112, 131, 0.4)',
            },
            content: {
              maxWidth: '600px',
              maxHeight: '278px',
              borderRadius: '25px',
              borderColor: '#000',
              backgroundColor: '#000',
              left: 'calc(61% - 600px)',
              top: '20%',
            },
          }}
        >
          <ModalContainer>
            <CloseRow>
              <CloseIcon />
            </CloseRow>

            <TextRow>
              <TextInput
                placeholder='O que está acontacendo?'
                onChange={(e) => {
                  handleChangeText(e.target.value);
                }}
              ></TextInput>
              <Button
                onClick={() => {
                  handleTweetar(tweetContent);
                }}
              >
                Tweetar
              </Button>
            </TextRow>
          </ModalContainer>
        </Modal>
      </Wrapper>
    </Container>
  );
}
