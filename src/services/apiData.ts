export class ApiResponseFormat {
       name: string = ''
       temp: string = ''
       weatherImg: string = ''
}

export async function ApiData(cityName: string): Promise<ApiResponseFormat | undefined> {
       const data = new ApiResponseFormat

       try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=11949befd3b0d536fcce214312f4060e&lang=pt_br&units=metric`)

              const database = await response.json()

              data.name = database.name

              data.temp = String(Math.round(database.main.temp))

              const weatherImgObject = await fetch(`https://openweathermap.org/img/wn/${database.weather[0].icon}@2x.png`)

              data.weatherImg = weatherImgObject.url              
              
              return data

       } catch(err) {
        console.log('Erro ao tentar conectar com a API: ', err);
       }
}
