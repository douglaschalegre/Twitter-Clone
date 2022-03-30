import React from 'react';
import Button from '../Button';
import {
  Container,
  MenuButton,
  Top,
  Logo,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Bottom,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

export default function ManuBar(props: any) {
  return (
    <Container>
      <Top>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className='active'>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button
          onClick={() => {
            props.handleOpenModal();
          }}
        >
          <span>Tweetar</span>
        </Button>
      </Top>

      <Bottom>
        <Avatar />
        <ProfileData>
          <strong>Douglas</strong>
          <strong>@twitter</strong>
        </ProfileData>
        <ExitIcon />
      </Bottom>
    </Container>
  );
}
