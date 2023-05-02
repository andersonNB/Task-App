import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(initialValue)

    useEffect(() => {
        const storageValue = localStorage.getItem(key);
        if (storageValue) setState(JSON.parse(storageValue));
    }, []);

    useEffect(() => {
        if (state.length > 0) localStorage.setItem(key, JSON.stringify(state))
    }, [state]);


    return [state, setState];
}