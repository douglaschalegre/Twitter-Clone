import React, { useEffect, useState } from 'react';
import { findProfile } from '../../services/api';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CalendarIcon,
  Followage,
} from './styles';

export default function ProfilePage() {
  const [data, setData] = useState();
  useEffect(() => {
    try {
      findProfile(1).then((response) => setData(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>{data?.name}</h1>
        <h2>@{data?.username}</h2>
        <p>{data?.description}</p>

        <ul>
          <li>
            <LocationIcon />
            {data?.location}
          </li>
          <li>
            <CalendarIcon />
            Ingressou em {data?.createdAt}
          </li>
        </ul>

        <Followage>
          <span>
            <strong>{data?.following}</strong> seguindo
          </span>
          <span>
            <strong>{data?.followers}</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}
