import { Button, chakra, Container, Heading } from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'

export const Header = () => {
  const { user } = useAuthContext()

  return (
    <chakra.header py={4} bgColor={'blue.600'}>
      <Container maxW={'container.lg'}>
        <Heading color={'white'}>
          {user ? (
            <Button colorScheme={'teal'}>サインアウト</Button>
          ) : (
            'ログアウト中'
          )}
        </Heading>
      </Container>
    </chakra.header>
  )
}
