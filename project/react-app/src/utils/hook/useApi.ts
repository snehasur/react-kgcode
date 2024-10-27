// Importing necessary dependencies and interfaces
import { useState, useEffect } from "react";
import {config} from "./../config";
import { useAppDispatch, useAppSelector } from "./../../store/store";
// import { addMessage } from "../slices/toastMessagesSlice";
import { logout } from "./../../store/authSlice";
// import { token } from "./../../store/authSlice";
// Defining interfaces for validation errors and request data
interface ValidationErrors {
    [key: string]: string[]
}

interface RequestData {
    [key: string]: any
}

// Interface for the properties of the API hook
interface ApiProps {
    path: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    sendRequest: boolean,
    reqData?: RequestData | FormData | null 
}

// The custom hook for making API requests
const useApi =  ({
    path,
    method,
    reqData,
    sendRequest
}: ApiProps) => {
    const dispatch = useAppDispatch()
    // const userToken = useAppSelector(token)

    // State variables for tracking API status and data
    const [isSuccess, setIsSuccess] = useState<boolean | null>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [validationErrors, setValidationErrors] = useState<ValidationErrors | null>(null)
    const [data, setData] = useState<null|any>(null)

    // Function to make the API call
    const callAPI = async () => {
        if (!sendRequest) {
            return;
        }
        setIsLoading(true)
        setValidationErrors(null)
        setIsSuccess(null)

        // Constructing the URL
        var url = new URL(`${config.baseUrl}${path}`)
        if (method === 'GET' && reqData && !(reqData instanceof FormData)) {
            let keys = Object.keys(reqData)
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i]
                let val = reqData[k]
                url.searchParams.set(k, val || '')
            }
        }

        // Constructing request options
        var options: RequestInit = { method: method, 
            headers: {
                // 'Authorization': `Bearer ${userToken ?? ''}`,
            }
        }
        if (method === 'POST' || method === 'PATCH') {
            options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json' ,
                    // 'Authorization': `Bearer ${userToken ?? ''}`,
                },
                body: JSON.stringify(reqData) // Convert reqData to JSON format
            };
        }

        try {
            const res: Response = await fetch(url, options);
            const response = await res.json()
            const statusCode = res.status

            // Handling different status codes
            if (statusCode === 422) {
                setValidationErrors(response.errors)
                // dispatch(addMessage({
                //     title: 'Error', 
                //     message: response.msg,
                //     type: 'error'
                // }))
            } else if (statusCode === 403) {
                dispatch(logout())
            }

            if (statusCode === 200) {
                //if (response.success) {
                    if(method !== 'GET'){
                        // dispatch(addMessage({
                        //     title: 'Success', 
                        //     message: response.msg,
                        //     type: 'success'
                        // }))
                    }
                    
                    setIsSuccess(true)
                    setData(response.data)
                //}
            }
        } catch (err) {
            // Handling API call errors
            // dispatch(addMessage({
            //     title: 'Error', 
            //     message: 'Unable to load',
            //     type: 'error'
            // }))
        }

        setIsLoading(false)
    }

    // Effect to call the API when sendRequest changes
    useEffect(() => {
        if (sendRequest) {
            callAPI()
        }
    }, [sendRequest])

    // Returning the state and data from the hook
    return {
        isSuccess: isSuccess,
        isLoading : isLoading,
        validationErrors: validationErrors,
        data: data
    }
}

export default useApi
