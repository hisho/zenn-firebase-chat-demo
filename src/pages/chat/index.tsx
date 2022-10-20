import {
  Button,
  chakra,
  Container,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react'

export const Page = () => {
  return (
    <Container py={14}>
      <Heading>チャット</Heading>
      <Spacer height={8} aria-hidden />
      <chakra.form display={'flex'} gap={2}>
        <Input />
        <Button type={'submit'}>送信</Button>
      </chakra.form>
    </Container>
  )
}

export default Page
