import logo from './logo.svg';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
const apiURL = 'https://swapi.dev/api/planets/';
function App() {
  const [planetsData, setPlanetsData]=useState([]);
  const [userName, setUsername]=useState('');
  let history = useHistory(); 

  async function getPlanetsData(ser = '') {
      ser = ser != '' ? `?search=${ser}` : '';
      const serUrl = `${apiURL}${ser}`;
      let res = await fetch(serUrl);
      res = await res.json();
      setPlanetsData(res.results);
  }

  useEffect(()=> {
    setUsername(sessionStorage.getItem("Username"));
    console.log(sessionStorage.getItem("isLogin"));
    getPlanetsData(); 
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("Username");
    history.push('/login');
  }

  return (
    <div className="App">
    <p>
      Hi {userName} <button type="button" value="Logout" onClick={() => handleLogout()}>Logout</button>
    </p>
    <p className="search">
      Search Planets: <input type="text" onChange={e => getPlanetsData(e.target.value)} />
    </p>
    <div className="container">
      {
        planetsData && planetsData.map((planet) =>  (
            <div key={planet.name} className="planet">
                <div className="label">Name</div>
                <h2> {planet.name} </h2> 
                <div className="label">Population</div>
                <p> {planet.population} </p>
            </div>
          ))
      }
      </div>
    </div>
  );
}

export default App;
