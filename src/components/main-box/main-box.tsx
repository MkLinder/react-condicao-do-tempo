import './main-box.css';
import React, { FormEvent, useState } from 'react';
import { ApiData, ApiResponse } from '../../services/apiData';

export const MainBox: React.FC = () => {
    const [ inputValue, setInputValue ] = useState("")
    const [ apiResponseData, setApiResponseData ] = useState({} as ApiResponse )
    let [ submitedInputValue, setSubmitedInputValue ] = useState(false)

    const FormSubmit = async (event: FormEvent) => {
        event.preventDefault()
    
        if ( inputValue.length < 3 ){
            alert("A cidade deve ter um nome com pelo menos 3 caracteres.")
            return
        }

        const apiResponse = await ApiData(inputValue)
        
        apiResponse && setApiResponseData(apiResponse)

        setSubmitedInputValue(submitedInputValue = true)        
    }

    return (
        <section id='main'>
            <h1 id='title'>CONDIÇÕES DO TEMPO</h1>
            <form 
                id='form-content' 
                action="submit"
                onSubmit={FormSubmit}
            >
                <input 
                    id='input-form' 
                    type="text" 
                    placeholder='Digite o nome da cidade...'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button 
                    type='submit'
                >Pesquisar</button>
            </form>
            { submitedInputValue  &&             
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