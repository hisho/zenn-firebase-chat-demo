import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <Heading>Chakra UI</Heading>
    </AuthGuard>
  )
}

export default Page
