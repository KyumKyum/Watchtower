import {useEffect, useRef} from "react";
const useInterval = (callback: () => void, delay:number|null) => {
    const savedCallback = useRef<() => void>();

    // Remembering the last state of the callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    //* Set up the interval
    useEffect(() => {
        function execute(){
            if(savedCallback.current){
                savedCallback.current() //* Execute current callback
            }
        }
        if(delay !== null){
            let intervalId = setInterval(execute,delay);
            return () => clearInterval(intervalId);
        }

    }, [delay])
}

export default useInterval;
