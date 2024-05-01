import { useEffect, useState } from 'react'
import { API } from '../utils/constants'

const useJobsApi = (offsetValue) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "limit": 10,
                "offset": offsetValue
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw
            };

            await fetch(API, requestOptions)
                .then((response) => response.json())
                .then((result) => setData(result?.jdList))
                .catch((error) => console.error(error));
        }
        fetchData();
    }, [offsetValue]);

    return data;
}

export default useJobsApi;