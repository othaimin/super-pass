import React, { FC, ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
}
const Heading: FC<HeadingProps> = ({ children, ...rest }) => {
    return (
        <h1 className="font-bold text-2xl" >{children}</h1>
    )
}

export default Heading