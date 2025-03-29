import { useEffect, useRef, useState } from "react";

export default function useForm(callBackFunction, initialValues = {}, params = {}) {
    const [values, setValues] = useState(initialValues);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const prevInitialValues = useRef(initialValues);

    useEffect(() => {
        // Only update values if the initialValues have changed
        if (JSON.stringify(prevInitialValues.current) !== JSON.stringify(initialValues)) {
            setValues(initialValues);
            prevInitialValues.current = initialValues; // Save the current initialValues
        }
    }, [initialValues]);

    const changeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        setError(null); 
        setSuccess(false);
        setPending(true);

        try {
            await callBackFunction({ values, ...params });
            setValues(initialValues); 
            setSuccess(true);
        } catch (err) {
            setError(err.message || 'An error occurred.');
        } finally {
            setPending(false);
        }
    };

    return {
        pending,
        values,
        changeHandler,
        submitHandler,
        error,
        success,
    };
}
