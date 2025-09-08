import type { Page } from './types'
import students from './pages/students'

const pages: Record<string, Page> = { students }

export const slugs = Object.keys(pages)

export async function getPage(slug: string): Promise<Page> {
  const p = pages[slug]
  if (!p) throw new Error('not-found')
  return p
}