import { useEffect, useState } from "react"

const useAnimated = () => {
    const [hidden, setHidden] = useState(true)
    useEffect(() => {
        setHidden(false)
    }, [])

    return { hidden }
}

export default useAnimated