import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface HtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag: 'h1' | 'h2'
  children: ReactNode
}
