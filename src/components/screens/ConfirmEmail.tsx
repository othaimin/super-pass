import React from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Input from '../Input'
import IconEmail from '../Icon/IconEmail'
import Button from '../Button'
import IconSend from '../Icon/IconSend'
import OTPInput from '../OTPInput'
import IconChecked from '../Icon/IconChecked'

const ConfirmEmail = () => {
    return (
        <div className='card-content !justify-center !gap-4'>
            <Heading>Confirm Email</Heading>
            <BodyText>A verification code has been sent to your email. Please check your inbox to continue</BodyText>
            <div className="w-full flex justify-between">
                <OTPInput />
                <OTPInput />
                <OTPInput />
                <OTPInput />
                <OTPInput />
            </div>
            <div className="flex w-full  gap-3 -mt-2">
                <div className="bg-foreground size-6 rounded-lg border border-border"></div>
                Save this device
            </div>
            <Button>Confirm<IconChecked /></Button>
        </div>
    )
}

export default ConfirmEmail