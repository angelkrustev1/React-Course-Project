import { useState } from "react";

export default function useToggled() {
    const [isToggled, setIsToggled] = useState(false);

    const toggledHandler = () => setIsToggled(!isToggled);

    return {
        isToggled,
        toggledHandler
    }
}