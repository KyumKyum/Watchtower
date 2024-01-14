import {useEffect, useState} from "react";

const useTypeWriterAnim = (completeStr:string, delay:number): string => {
    const [renderedString, setRenderedString] = useState('');
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if(idx < completeStr.length) {
            const timeout = setTimeout(() => {
                setRenderedString(prevString => prevString + completeStr[idx]);
                setIdx(prevIdx => prevIdx + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [idx, renderedString, completeStr]);

    return renderedString;
}


export default useTypeWriterAnim;
