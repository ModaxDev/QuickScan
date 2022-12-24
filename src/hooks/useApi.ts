import {useState} from "react";

const useApi = (apiFunc: any) => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const request = async (...args : any) => {
        setIsLoading(true);
        const response = await apiFunc(...args);
        setIsLoading(false);

        setError(!response.ok)
        setData(response.data);
        return response;
    };

    return {data, error, isLoading, request};
};

export default useApi;
