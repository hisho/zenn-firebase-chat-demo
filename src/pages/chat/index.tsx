import {
  Button,
  chakra,
  Container,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'

export const Page = () => {
  const [message, setMessage] = useState<string>('')

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    console.log({ message })
    e.preventDefault()
  }

  return (
    <Container py={14}>
      <Heading>チャット</Heading>
      <Spacer height={8} aria-hidden />
      <chakra.form display={'flex'} gap={2} onSubmit={handleSendMessage}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button type={'submit'}>送信</Button>
      </chakra.form>
    </Container>
  )
}

export default Page
