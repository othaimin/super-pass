import React, { FC, ReactNode } from 'react'
type CardProps = {
    children: ReactNode
}
const Card: FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full flex-grow bg-foreground rounded-3xl overflow-hidden relative text-center">
            <div className="size-32 rounded-full bg-primary absolute -top-20 left-1/2 -translate-x-1/2"></div>
            <div className="absolute w-full h-full bg-whigte/30 p-5 " style={{ backdropFilter: 'blur(50px)' }}>
                {children}
            </div>
        </div>
    )
}

export default Card