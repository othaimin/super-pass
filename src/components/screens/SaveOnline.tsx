import React from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Input from '../Input'
import IconEmail from '../Icon/IconEmail'
import Button from '../Button'
import IconSend from '../Icon/IconSend'

const SaveOnline = () => {
    return (
        <div className='card-content !justify-center !gap-4'>
            <Heading>Save Online</Heading>
            <BodyText>Save your password securely online for easy access anytime, anywhere!</BodyText>
            <Input Icon={IconEmail} placeholder='Enter your Emil' />
            <Button>Send Code <IconSend /></Button>
        </div>
    )
}

export default SaveOnline