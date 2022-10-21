import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeFirebaseApp } from '@src/lib/firebase/firebase'
import { AuthProvider } from '@src/feature/auth/provider/AuthProvider'
import { Header } from '@src/component/Header/Header'
import { Footer } from '@src/component/Footer/Footer'

initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
