import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@/components/lib/utils'



const buttonVariants = cva(
    "w-full h-14 min-h-14 rounded-xl flex items-center justify-center gap-4 font-medium text-lg active:scale-95 transition-all",
    {
        variants: {
            variant: {
                default: 'bg-primary',
                outline: 'bg-foreground border border-border'
            },
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    children: ReactNode
}
const Button: FC<ButtonProps> = ({ children, className, variant, ...rest }) => {
    return (
        <button className={cn(buttonVariants({ variant, className }))} {...rest}>
            {children}
        </button>
    )
}

export default Button