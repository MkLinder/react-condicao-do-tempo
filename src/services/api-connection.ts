export async function ApiConnection(cityName: string) {
       try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=11949befd3b0d536fcce214312f4060e&lang=pt_br&units=metric`)

       const database = await response.json()
       console.log(database);
       
       return database

       } catch(err) {
        console.log('Erro ao tentar conectar com a API: ', err);
       }
}
