import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { pagesPath } from '@src/lib/pathpida/$path'

type Props = {
  children: ReactNode
}

export const AuthGuard = ({ children }: Props) => {
  const { user } = useAuthContext()
  const { push } = useRouter()

  if (typeof user === 'undefined') {
    return <Box>読み込み中...</Box>
  }

  if (user === null) {
    push(pagesPath.signin.$url())
    return null
  }

  return <>{children}</>
}
