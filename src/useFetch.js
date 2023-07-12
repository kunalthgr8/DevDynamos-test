import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [ data, setData ] = useState(null);

    const [ isPending, setisPending ] = useState(true);

    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch resource from the server')
                }
                // console.log(res);
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setisPending(false);
            })
    }, [url]);
    return (
        { data, isPending, error }
    );
}
 
export default useFetch;