import React, { FC } from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Input from '../Input'
import IconEmail from '../Icon/IconEmail'
import Button from '../Button'
import IconSend from '../Icon/IconSend'
import Animated from '../Animated'
import { ScreenTypes } from '@/types/ScreenTypes'

const SaveOnline: FC<ScreenTypes> = ({ screenToHidden, toggleScreen }) => {
    const hide = screenToHidden === 'saveOnline'
    return (
        <div className='card-content !justify-center !gap-4'>
            <Animated delays={['.1s', '.4s']} hide={hide}>
                <Heading>Save Online</Heading>
            </Animated>
            <Animated delays={['.2s', '.3s']} hide={hide}>

                <BodyText>Save your password securely online for easy access anytime, anywhere!</BodyText>
            </Animated>
            <Animated delays={['.3s', '.2s']} hide={hide}>

                <Input Icon={IconEmail} placeholder='Enter your Emil' />
            </Animated>
            <Animated delays={['.4s', '.1s']} hide={hide}>

                <Button onClick={() => toggleScreen('confirmEmail')}>Send Code <IconSend /></Button>
            </Animated>
        </div>
    )
}

export default SaveOnline