import { cn } from '@/components/lib/utils'
import React, { FC, ReactNode} from 'react'
type AnimatedProps = {
    children: ReactNode
    delays: string[]
    hide: boolean
}
const Animated: FC<AnimatedProps> = ({ children, delays, hide }) => {
    return (
        <div
            className={
                cn('animated ', hide ? 'hide' : 'show')
            }
            style={{ animationDelay: !hide ? delays[0] : delays[1] }}
        >{children}</div>
    )
}

export default Animated

