import { useState } from "react"
export type ScreensType = 'generatePassword' | 'savedPasswords' | 'saveOnline' | 'emailConfirmationSuccess' | 'confirmEmail' | null
const useScreen = () => {
    const [activeScreen, setActiveScreen] = useState<ScreensType>('confirmEmail')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [screenToHidden, setscreenToHidden] = useState<ScreensType>(null)

    const toggleScreen = (screen: ScreensType) => {
        setscreenToHidden(activeScreen)
        setIsButtonDisabled(true)

        setTimeout(() => {
            setActiveScreen(screen)
        }, 1000);
        setTimeout(() => {
            setIsButtonDisabled(false)
        }, 2000);
    }


    return {
        activeScreen,
        isButtonDisabled,
        screenToHidden,
        toggleScreen
    }

}

export default useScreen