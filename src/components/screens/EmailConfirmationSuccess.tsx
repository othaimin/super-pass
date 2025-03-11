import React, { FC } from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import SuccessAnimation from '../SuccessAnimation'
import { ScreenTypes } from '@/types/ScreenTypes'
import Animated from '../Animated'

const EmailConfirmationSuccess: FC<ScreenTypes> = ({ screenToHidden }) => {
    const hide = screenToHidden === 'emailConfirmationSuccess'

    return (
        <div className='card-content !justify-center !gap-4'>
            <Animated delays={['.1s', '.4s']} hide={hide} >
                <Heading>Success</Heading>
            </Animated>
            <Animated delays={['.4s', '.1s']} hide={hide} >

                <SuccessAnimation />
            </Animated>
            <Animated delays={['.2s', '.3s']} hide={hide} >
                <BodyText>Email verification successful! Secure password storage is now available.</BodyText>
            </Animated>
            <Animated delays={['.3s', '.2s']} hide={hide} >

                <Button>Done</Button>
            </Animated>
        </div>
    )
}

export default EmailConfirmationSuccess