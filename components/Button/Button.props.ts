import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  variant: 'primary' | 'outlined'
}
