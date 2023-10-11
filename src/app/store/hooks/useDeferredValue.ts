import { useCallback, useState, useRef, useEffect } from 'react'

const useDeferredValue = (value : string) => {
    
    const [def, setDef] = useState('')
    const timeId = useRef(0)

    const debounce = useCallback((val : string) => {
        clearTimeout(timeId.current);

        //@ts-ignore
        timeId.current = setTimeout(() => {
            setDef(val);
        }, 500);
    }, [timeId])

    useEffect(() => {
        debounce(value)
    }, [debounce, value])

    return def
}

export default useDeferredValue