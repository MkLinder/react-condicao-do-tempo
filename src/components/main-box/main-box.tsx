import { useRef } from 'react';
import './main-box.css';
import { FormServices } from '../../services/form-services';
import weatherImg from '../../utils/weather-img.png'

export function MainBox() {
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)


    if (formRef && inputRef) {
        FormServices(formRef.current, inputRef.current)
    }
    

    return (
        <section id='main'>
            <h1 id='title'>CONDIÇÃO DO TEMPO</h1>
            <form ref={formRef} id='form-content' action="submit">
                <input ref={inputRef} id='input-form' type="text" placeholder='Digite o nome da cidade...'/>
                <button>Pesquisar</button>
            </form>
            <section id="search-result">
                <div id="loc-temp-content">
                    <p id='loc'>Florianópolis</p>
                    <p id='temp'>14ºC</p>
                </div>
                <img src={weatherImg} alt="imagem ilustrativa da condição do tempo" />
            </section>
        </section>
    )
}