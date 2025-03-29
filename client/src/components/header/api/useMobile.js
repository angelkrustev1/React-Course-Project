import { useEffect, useState } from "react"

export default function useMobile() {
    const MOBILE_SIZE = 780;
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= MOBILE_SIZE);
        };

        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return { isMobile }
}