import React, { FC, ReactNode } from 'react'
type BodyTextProps = {
    children: ReactNode
}
const BodyText: FC<BodyTextProps> = ({ children }) => {
    return (
        <p className="font-light">{children}</p>

    )
}

export default BodyText