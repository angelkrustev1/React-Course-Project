import { useEffect, useState } from "react";
import request from "../utils/request";

const defaultModifyResponseData = (data) => data;

export default function useFetch(url, defaultState = {}, modifyResponseData = defaultModifyResponseData) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        const abortController = new AbortController();

        (async () => {
            try {
                const result = await request.get(url, null, {
                    signal: abortController.signal,
                });
                
                setState(modifyResponseData(result));
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch error:", error);
                }
            } finally {
                setPending(false);
            }
        })();

        return () => {
            abortController.abort();
        };
    }, [url, modifyResponseData]);

    return { pending, state, setState };
}
