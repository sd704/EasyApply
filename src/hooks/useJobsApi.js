import { useEffect, useState } from 'react'
import { API } from '../utils/constants'

const useJobsApi = (offsetValue) => {
    const [page, setPage] = useState([])

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
                .then((result) => setPage(result?.jdList))
                .catch((error) => console.error(error));
        }
        fetchData();
    }, [offsetValue]);

    return page;
}

export default useJobsApi;