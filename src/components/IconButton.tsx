import { cn } from '@/components/lib/utils'
import React, { ButtonHTMLAttributes, FC } from 'react'
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    Icon: () => React.JSX.Element
}
const IconButton: FC<IconButtonProps> = ({ Icon, className, ...rest }) => {
    return (
        <button className={cn("size-9 bg-foreground rounded-xl flex items-center justify-center", className)} {...rest}><Icon /></button>
    )
}

export default IconButton