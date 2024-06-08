import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const axios = require('axios');

    const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/${endpoint}',
    params: { ...query},
    headers: {
        'x-rapidapi-key': '4839eeef4amshe41d81f9b9e2a1dp1a7cebjsn131fe512204b',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
    };
    const fetchData =async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            alert('An error has occured')
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch };

}
export default useFetch;
