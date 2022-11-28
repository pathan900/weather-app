import React, { useEffect, useState } from 'react'
import './App.css';
import './index.css'

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("bhopal");
  // const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3516f522e8dc629a5839695873f3f1d0`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main)

      //setWeather(resJson.weather[0].main)
      //console.log(weather)
      
    }
    fetchApi()
  }, [search])
  const refresh = () =>{
    window.location.reload(false);
  }
  return (
    <div className="app">
      <div className="container">
        <input type="search" value={search} placeholder="Search city" onChange={(event) => { setSearch(event.target.value) }} />

        {
          !city ? (<div className="error">
                <p >No data found 😥</p>
                {/* <button onClick={refresh}>Reload page</button> */}
            </div>)
            : (<div className="info">
              <h2>{search}</h2>
              <h1>{city.temp}&#8451;</h1>
              <p>-------------</p>
              <h4>Humidity : {city.humidity}</h4>
              <h4>Min : {city.temp_min}&#8451; | Max : {city.temp_max}&#8451;</h4>
            </div>
            )
        }

      </div>
    </div>
  );
}

export default App;
