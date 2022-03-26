import React from 'react';

import { Container } from './styles';

interface Props {
  topic: string;
  title: string;
}

function News({ topic, title }: Props) {
  return (
    <Container>
      <span>{topic}</span>
      <strong>{title}</strong>
    </Container>
  );
}

export default News;
