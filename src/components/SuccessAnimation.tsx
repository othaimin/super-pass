'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const SuccessAnimation = () => {
    return (
        <div className="min-w-40 min-h-40 -my-4">
            <DotLottieReact
                src="lotties/success.lottie"
                autoplay
            />
        </div>
    )
}

export default SuccessAnimation