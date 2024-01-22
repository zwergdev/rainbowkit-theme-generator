import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.025] shadow-connect rounded-connect',
  {
    variants: {
      variant: {
        default: 'bg-accent text-accent-foreground',
        secondary: 'bg-connect text-connect-text',
        address: 'bg-connect-inner text-connect-text border-px border-connect',
        error: 'bg-connect-error text-connect-error-text gap-2.5',
      },
      size: {
        default: 'h-10 px-3.5',
        profile: 'h-10 pl-3 pr-0.5',
        address: 'h-9 px-2',
        error: 'h-10 pl-3.5 pr-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
