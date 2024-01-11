import {useEffect, useState} from "react";

const useMobileCheck = (): Boolean => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 800px)")

        const listener = () => {
            setIsMobile(media.matches)
        };

        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    },[isMobile])

    return isMobile;
}

export default useMobileCheck;

