import React, { FC, InputHTMLAttributes, JSX } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    Icon: () => JSX.Element
}
const Input: FC<InputProps> = ({ Icon, ...rest }) => {
    return (
        <div className="flex w-full items-center gap-3 h-14 bg-foreground border border-border p-3 rounded-2xl">
            <Icon />
            <input type="text" className="w-full bg-transparent" {...rest} />
        </div>
    )
}

export default Input