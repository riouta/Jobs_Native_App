// Import necessary modules
import { useState, useEffect } from "react";
import axios from "axios";


// Custom hook to fetch data from an API
const useFetch = (endpoint, query ) => {
    // Define state variables
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const axios = require('axios');
      // Function to fetch data from the API
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
            const response = await axios.request(options); // Make the API request
            console.log('API response:', response.data); // Log the entire response
            setData(response.data.data);// Set the data state with the response data

        } catch (error) {
            console.error('API error:', error);
            setError(error);
        // Handle different types of errors
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
    // Fetch data when the component mounts or when the endpoint/query changes
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    // Return the data, loading state, error state, and refetch function
    return {data, isLoading, error, refetch };

}
export default useFetch;
