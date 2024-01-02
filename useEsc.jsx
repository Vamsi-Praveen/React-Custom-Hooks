//This hook is used to achieve the behavior of when a element is toggle by a trigger button when click esc button it closes the menu thus increases the user experience
import { useEffect } from "react"

const useEsc = (handler) => {
    useEffect(() => {
        //checking the button pressed is Esc button or not
        const handleEscPress = (e) => {
            if (e.key == 'Escape') {
                //if the button is Escape then call the handler function the handler functionc contains business logic i.e simply changing the state to false
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
