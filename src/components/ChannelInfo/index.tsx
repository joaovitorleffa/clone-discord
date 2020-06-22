import React from 'react'

import { Container, HashtagIcon, Separator, Title, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat Livre</Title>

      <Separator />

      <Description>Canal Aberto para conversas</Description>

    </Container>
  )
}

export default ChannelInfo;