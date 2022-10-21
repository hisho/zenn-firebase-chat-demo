import { chakra, Container } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
      <Container maxW={'container.lg'}>Footer</Container>
    </chakra.footer>
  )
}
