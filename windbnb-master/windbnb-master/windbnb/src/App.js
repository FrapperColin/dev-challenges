import React, {useState, useEffect} from 'react'
import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [stays, setStays] = useState([])
  const [currentLocation, setCurrentLocation] = useState({country: "", city: ""})

  useEffect(() => {
  let url = "/data/stays.json";
  fetch(url)
      .then(res => res.json())
      .then(stays => setStays(stays))
  }, []);

  return (
    <div className="App">
      <HeaderContainer stays={stays} />
      <MainContainer stays={stays} />
      <FooterContainer />
    </div>
  );
}

export default App;
