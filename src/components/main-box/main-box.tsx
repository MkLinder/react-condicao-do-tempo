import './main-box.css';

export function MainBox() {
    return (
        <section id='main'>
            <h1 id='title'>Condição do tempo</h1>
            <form action="submit">
                <input type="text" placeholder='Digite o nome da cidade...'/>
                <button>Pesquisar</button>
            </form>
            <div id="loc-temp">
                <p id='loc'>Florianópolis</p>
                <p id='temp'>14ºc</p>
            </div>
            <div id="img">
                <img src="" alt="imagem ilustrativa da condição do tempo" />
            </div>
        </section>
    )
}