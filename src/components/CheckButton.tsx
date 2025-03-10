import React, { ButtonHTMLAttributes, FC } from 'react'
type CheckButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string
}
const CheckButton: FC<CheckButtonProps> = ({ value, ...rest }) => {
    return (
        <button className="flex items-center justify-center w-full h-10 bg-foreground rounded-xl text-sm border border-border active:scale-95 transition-all" {...rest}>{value}</button>

    )
}

export default CheckButton