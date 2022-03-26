import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='Lucas Montano'
                nickname='@lucas_montano'
              />,
              <FollowSuggestion name='Alura' nickname='@AluraOnline' />,
              <FollowSuggestion name='Rocketseat' nickname='@rocketseat' />,
            ]}
          />
          <List
            title='O que está acontecendo'
            elements={[
              <News topic='Assunto do Momento em Brasil' title='Mendigo' />,
              <News topic='Assunto do Momento em Brasil' title='Casimiro' />,
              <News
                topic='Covid-19'
                title='São Paulo: as últimas notícias sobre a pandemia'
              />,
              <News topic='Assunto do Momento em São Paulo' title='Itaú' />,
              <News
                topic='Assunto do Momento em Gaming'
                title='PlayStation 5'
              />,
              <News
                topic='Música'
                title="Anitta quebra seu próprio recorde com 'Envolver' e chega ao 2º lugar das mais ouvidas no Spotify"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
