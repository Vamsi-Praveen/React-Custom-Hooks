//This hook is used to achieve the behavior of when a element is toggle by a trigger button when click outside it closes the menu thus increases the user experience

import { useEffect } from "react"

//custom hook
const useClickOutside = (ref, handler) => {
    useEffect(() => {
        //creating a function it will execute on mousedown and touchstart event listners touchstart is used for mobile touch
        const listener = (e) => {
            const el = ref?.current;
            //this hook needs the refernce of the particular element which we need to close and handler function basically the handler functions contains the logic how to close the element
            //simply like setting the state value to false
            if (!el || el.contains((e.target) || null)) {
                //checking if we click inside the particular element or not if inside the element nothing we will do
                return;
            }
            //calling the handler function when clicking outside
            handler(e)
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        //clean up code
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler])
}

export default useClickOutside
