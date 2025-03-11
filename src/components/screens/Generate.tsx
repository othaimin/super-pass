'use client'
import React, { FC} from 'react'
import Heading from '../Heading'
import BodyText from '../BodyText'
import Input from '../Input'
import CheckButton from '../CheckButton'
import IconWeb from '../Icon/IconWeb'
import Button from '../Button'
import IconStars from '../Icon/IconStars'
import Animated from '../Animated'
import { ScreenTypes } from '@/types/ScreenTypes'



const Generate: FC<ScreenTypes> = ({ screenToHidden }) => {
    const hide = screenToHidden === 'generatePassword'

    return (
        <div className="card-content ">
            <Animated hide={hide} delays={['.1s', '.6s']}>
                <Heading>Generate Strong Password</Heading>
            </Animated>
            <Animated hide={hide} delays={['0.2s', '.5s']}>
                <BodyText>Generate a strong, secure password with a mix of letters, numbers, and symbols to keep your accounts safe!</BodyText>
            </Animated>
            <div className="grid gap-2">
                <Animated hide={hide} delays={['0.3s', '.4s']}>
                    <Input Icon={IconWeb} placeholder="Site or App Name" />
                </Animated>
                <div className="grid grid-cols-3 gap-2">
                    <Animated hide={hide} delays={['0.4s', '.3s']}>
                        <CheckButton value="Ironclad" />
                    </Animated>
                    <Animated hide={hide} delays={['0.5s', '.2s']}>

                        <CheckButton value="Titanium" />
                    </Animated>
                    <Animated hide={hide} delays={['0.6s', '.1s']}>
                        <CheckButton value="Uncrackable" />
                    </Animated>
                </div>
                <Animated hide={hide} delays={['0.5s', '.0s']}>
                    <Button className='mt-3' >Generate <IconStars /> </Button>
                </Animated>
            </div>
        </div>
    )
}

export default Generate
