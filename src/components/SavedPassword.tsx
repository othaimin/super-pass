import React, { FC } from 'react'
import IconWeb from './Icon/IconWeb'
import IconButton from './IconButton'
import IconCopy from './Icon/IconCopy'
import IconRefresh from './Icon/IconRefresh'
import IconTrash from './Icon/IconTrash'

type SavedPasswordProps = {
    title: string
}
const SavedPassword: FC<SavedPasswordProps> = ({ title }) => {
    return (
        <div className="flex gap-3 items-center h-12 ">
            <IconWeb />
            {title}
            <div className="flex-grow flex  gap-2 justify-end">
                <IconButton Icon={IconTrash} />
                <IconButton Icon={IconRefresh} />
                <IconButton Icon={IconCopy} />
            </div>
        </div>
    )
}

export default SavedPassword