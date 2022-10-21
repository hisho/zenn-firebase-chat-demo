import { useRouter as useNextRouter } from 'next/router'
import { useCallback } from 'react'
import type { UrlObject } from 'url'
import { pagesPath, PagesPath } from '@src/lib/pathpida/$path'

export const useRouter = () => {
  const nextRouter = useNextRouter()

  const push = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      return nextRouter.push(typeof url === 'function' ? url(pagesPath) : url)
    },
    [nextRouter]
  )

  const replace = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      return nextRouter.replace(
        typeof url === 'function' ? url(pagesPath) : url
      )
    },
    [nextRouter]
  )

  return { push, replace } as const
}