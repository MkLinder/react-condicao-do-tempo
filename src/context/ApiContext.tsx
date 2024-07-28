import { createContext, useRef, useState } from "react";
import { ApiResponseFormat } from "../services/apiData";

interface IApiProviderProps {
    children: React.ReactNode
}

interface IApiResponse {
    apiResponseData: ApiResponseFormat
    setApiResponseData: React.Dispatch<React.SetStateAction<ApiResponseFormat>>
    submitedInputValueRef:  React.MutableRefObject<boolean>
    inputRef:  React.RefObject<HTMLInputElement>
}

export const apiContext = createContext({} as IApiResponse)

export const ApiContext: React.FC<IApiProviderProps> = ({ children }) => {
    const [ apiResponseData, setApiResponseData ] = useState({} as ApiResponseFormat )
    const submitedInputValueRef = useRef<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    
    return (
        <apiContext.Provider value={{
            apiResponseData,
            setApiResponseData,
            submitedInputValueRef,
            inputRef
        }}>
            { children }
        </apiContext.Provider>
    )
}