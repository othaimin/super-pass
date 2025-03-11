import React, { FC, ReactNode } from 'react'
type CardProps = {
    children: ReactNode
}
const Card: FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full flex-grow bg-foreground rounded-3xl overflow-hidden relative text-center flex justify-center">
            <div className="size-32 rounded-full bg-primary absolute -top-20  "></div>
            <div className="absolute w-full h-full min-h-fit bg-whigte/30 p-5 backdrop-blur-3xl rounded-3xl " >
                {children}
            </div>
        </div>
    )
}

export default Card