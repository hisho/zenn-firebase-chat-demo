import { Button, chakra, Container, Heading } from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { FirebaseError } from '@firebase/util'
import { getAuth, signOut } from 'firebase/auth'

export const Header = () => {
  const { user } = useAuthContext()
  const handleSignOut = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  return (
    <chakra.header py={4} bgColor={'blue.600'}>
      <Container maxW={'container.lg'}>
        <Heading color={'white'}>
          {user ? (
            <Button colorScheme={'teal'} onClick={handleSignOut}>
              サインアウト
            </Button>
          ) : (
            'ログアウト中'
          )}
        </Heading>
      </Container>
    </chakra.header>
  )
}
