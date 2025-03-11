'use client'

import useScrollBar from '@/hooks/use-scroll-bar'
import { cn } from '@/components/lib/utils'
import React, { FC, ReactNode } from 'react'
type ScrollBarProps = {
    children: ReactNode
}
const ScrollBar: FC<ScrollBarProps> = ({ children }) => {
    const { scrollRef, isScrollable } = useScrollBar()
    return (
        <div ref={scrollRef} className={cn('flex-grow w-full overflow-auto scroll-smooth h-full scrollbar transition-all', isScrollable && 'pe-2')} >
            {children}
        </div>
    )
}

export default ScrollBar