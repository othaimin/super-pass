import React, { FC, InputHTMLAttributes, JSX, ReactNode } from 'react'
import IconWeb from './Icon/IconWeb'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    Icon: () => JSX.Element
}
const Input: FC<InputProps> = ({ Icon, ...rest }) => {
    return (
        <div className="flex w-full items-center gap-3 h-14 bg-foreground border border-border p-3 rounded-2xl">
            <Icon />
            <input type="text" className="focus-visible:outline-none" {...rest} />
        </div>
    )
}

export default Input