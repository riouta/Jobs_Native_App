import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const axios = require('axios');

    
    const fetchData =async () => {
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/${endpoint}',
            params: { ...query},
            headers: {
                'x-rapidapi-key': '4839eeef4amshe41d81f9b9e2a1dp1a7cebjsn131fe512204b',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
            };

            console.log('Fetching data with options:', options);

        try {
            const response = await axios.request(options);
            console.log('API response:', response.data); // Log the entire response
            setData(response.data.data);

        } catch (error) {
            console.error('API error:', error);
            setError(error);

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Error response data:', error.response.data);
                console.log('Error response status:', error.response.status);
                console.log('Error response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('Error request data:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error message:', error.message);
            }

            alert('An error has occurred: ' + (error.response ? error.response.data.message : error.message));
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
