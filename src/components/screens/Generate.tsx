import React from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Input from '../Input'
import CheckButton from '../CheckButton'
import IconWeb from '../Icon/IconWeb'
import Button from '../Button'
import IconStars from '../Icon/IconStars'

const Generate = () => {
    return (
        <div className="card-content">
            <Heading>Generate Strong Password</Heading>
            <BodyText>Generate a strong, secure password with a mix of letters, numbers, and symbols to keep your accounts safe!</BodyText>
            <div className="grid gap-2">
                <Input Icon={IconWeb} placeholder="Site or App Name" />
                <div className="grid grid-cols-3 gap-2">
                    <CheckButton value="Ironclad" />
                    <CheckButton value="Titanium" />
                    <CheckButton value="Uncrackable" />
                </div>
                <Button className='mt-3' >Generate <IconStars /> </Button>
            </div>
        </div>
    )
}

export default Generate