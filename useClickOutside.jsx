import { useEffect } from "react"

const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            const el = ref?.current;
            if (!el || el.contains((e.target) || null)) {
                return;
            }
            handler(e)
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler])
}

export default useClickOutside
