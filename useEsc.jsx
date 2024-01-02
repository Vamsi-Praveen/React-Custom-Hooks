import { useEffect } from "react"

const useEsc = (handler) => {
    useEffect(() => {
        const handleEscPress = (e) => {
            if (e.key == 'Escape') {
                handler();
            }
        }

        document.addEventListener('keydown', handleEscPress);
        return () => {
            document.removeEventListener('keydown', handleEscPress)
        }

    }, [handler])
}

export default useEsc
