import { useEffect, useRef, useState } from "react";

const useScrollBar = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                setIsScrollable(scrollRef.current.scrollHeight > scrollRef.current.clientHeight);
            }
        };

        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);
    return { isScrollable, scrollRef }
}

export default useScrollBar