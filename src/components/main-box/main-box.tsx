import './main-box.css';
import React, { FormEvent, useRef, useState } from 'react';
import { ApiData, ApiResponse } from '../../services/apiData';

export const MainBox: React.FC = () => {
    const [ apiResponseData, setApiResponseData ] = useState({} as ApiResponse )

    const submitedInputValueRef = useRef<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const formSubmit = async (event: FormEvent) => {
        event.preventDefault()
    
        if ( inputRef.current ) {
            if ( inputRef.current.value.length < 3 ){
                alert("A cidade deve ter um nome com pelo menos 3 caracteres.")
                return
            }
            const apiResponse = await ApiData(inputRef.current.value)

            apiResponse && setApiResponseData(apiResponse)

            submitedInputValueRef.current = true   
        }            
    }

    return (
        <section id='main'>
            <h1 id='title'>CONDIÇÕES DO TEMPO</h1>
            <form 
                id='form-content' 
                action="submit"
                onSubmit={formSubmit}
            >
                <input 
                    id='input-form' 
                    type="text" 
                    placeholder='Digite o nome da cidade...'
                    ref={inputRef}
                />
                <button 
                    type='submit'
                >Pesquisar</button>
            </form>
            { submitedInputValueRef.current  &&             
                <section id="search-result">
                    <div id="loc-temp-content">
                        <p id='loc'>{ apiResponseData.name }</p>
                        <p id='temp'>{`${apiResponseData.temp}ºC`}</p>
                    </div>
                    <img src={ apiResponseData.weatherImg } alt="imagem ilustrativa da condição do tempo" />
                </section>
            }
        </section>
    )
}