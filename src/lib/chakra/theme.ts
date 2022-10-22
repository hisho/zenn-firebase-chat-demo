import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body,#__next': {
        height: '100%',
        '&': {
          height: '100svh',
        },
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
})
