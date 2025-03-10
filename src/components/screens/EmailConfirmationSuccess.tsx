import React from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Button from '../Button'
import SuccessAnimation from '../SuccessAnimation'

const EmailConfirmationSuccess = () => {
    return (
        <div className='card-content !justify-center !gap-4'>
            <Heading>Success</Heading>
            <SuccessAnimation />
            <BodyText>Email verification successful! Secure password storage is now available.</BodyText>
            <Button>Done</Button>
        </div>
    )
}

export default EmailConfirmationSuccess