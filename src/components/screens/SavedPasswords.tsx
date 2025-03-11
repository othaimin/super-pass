import Heading from '../Heading'
import Button from '../Button'
import IconLock from '../Icon/IconLock'
import SavedPassword from '../SavedPassword'

import ScrollBar from '../ScrollBar'
import { FC } from 'react'
import Animated from '../Animated'
import { ScreenTypes } from '@/types/ScreenTypes'

const SavedPasswords: FC<ScreenTypes> = ({ screenToHidden, toggleScreen }) => {

    const hide = screenToHidden === 'savedPasswords'
    return (
        <div className="card-content" >
            <Animated delays={['.1s', '.9s']} hide={hide}>
                <Heading>Saved Passwords</Heading>
            </Animated>
            <ScrollBar>

                <Animated delays={['.2s', '.8s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.3s', '.7s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.4s', '.6s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.5s', '.5s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.6s', '.4s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.7s', '.3s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>
                <Animated delays={['.8s', '.2s']} hide={hide}>
                    <SavedPassword title="Gmail" />
                </Animated>

            </ScrollBar>
            <Animated delays={['.5s', '.1s']} hide={hide}>
                <Button onClick={() => toggleScreen('saveOnline')}>Save Onine <IconLock /></Button>
            </Animated>
        </div>
    )
}

export default SavedPasswords