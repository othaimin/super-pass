import React, { FC } from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import OTPInput from '../OTPInput'
import IconChecked from '../Icon/IconChecked'
import { ScreenTypes } from '@/types/ScreenTypes'
import Animated from '../Animated'

const ConfirmEmail: FC<ScreenTypes> = ({ screenToHidden, toggleScreen }) => {
    const hide = screenToHidden === 'confirmEmail'
    return (
        <div className='card-content !justify-center !gap-4'>
            <Animated delays={['.1s', '.5s']} hide={hide} >
                <Heading>Confirm Email</Heading>
            </Animated>
            <Animated delays={['.2s', '.4s']} hide={hide} >

                <BodyText>A verification code has been sent to your email. Please check your inbox to continue</BodyText>
            </Animated>
            <div className="w-full flex justify-between gap-2">
                <Animated delays={['.3s', '.5s']} hide={hide} > <OTPInput /> </Animated>
                <Animated delays={['.35s', '.45s']} hide={hide} > <OTPInput /> </Animated>
                <Animated delays={['.4s', '.4s']} hide={hide} > <OTPInput /> </Animated>
                <Animated delays={['.45s', '.35s']} hide={hide} > <OTPInput /> </Animated>
                <Animated delays={['.5s', '.3s']} hide={hide} > <OTPInput /> </Animated>
            </div>
            <Animated delays={['.4s', '.2s']} hide={hide} >

                <div className="flex w-full  gap-3 -mt-2">
                    <div className="bg-foreground size-6 rounded-lg border border-border"></div>
                    Save this device
                </div>
            </Animated>
            <Animated delays={['.5s', '.1s']} hide={hide} >

                <Button onClick={() => toggleScreen('emailConfirmationSuccess')}>Confirm<IconChecked /></Button>
            </Animated>
        </div>
    )
}

export default ConfirmEmail