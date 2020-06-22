import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />
        <ChannelMessage 
          author="João Vitor"
          date="22/06/2020"
          content="Lolziho hoje?"
        />

        <ChannelMessage 
          isBot
          hasMention
          author="Diego Fernandes"
          date="22/06/2020"
          content={
            <>
              <Mention>@João Vitor</Mention>, Bora codar?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;