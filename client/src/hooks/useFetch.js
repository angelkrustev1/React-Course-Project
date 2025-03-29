import { useEffect, useState } from "react";
import request from "../utils/request";

const defaultModifyResponseData = (data) => data;

export default function useFetch({
    url,
    defaultState = {},
    modifyResponseData = defaultModifyResponseData
}) {
    const [state, setState] = useState(defaultState)
    const [pending, setPending] = useSteta(false)

    useEffect(() => {
        setPending(true)
        const abortController = new AbortController();

        (async() => {
            const result = await request.get(url, null, {
                signal: abortController.signal,
            })
            setState(modifyResponseData(result))
            setPending(false)
        })()

        return () => abortController.abort();
    }, [url])

    return [
        pending,
        state,
        setState,
    ]
}