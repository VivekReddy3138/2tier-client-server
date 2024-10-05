import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

   let[cast,SetCast] = useState([]);

    let getIndianCricketTeam = async()=>{
    let reqOptions = {
        method:"GET",
      };

      let JSONData = await fetch("http://localhost:4567/indianCricketTeam",reqOptions);

      let JSOData = await JSONData.json();

      SetCast(JSOData);

      console.log(JSOData)
    }

    let getAusCricketTeam = async()=>{
    let reqOptions = {
        method:"GET",
      };

      let JSONData = await fetch("http://localhost:4567/ausCricketTeam",reqOptions);

      let JSOData = await JSONData.json();

      SetCast(JSOData);

      console.log(JSOData)
    }

  return (
    <div className="App">
      <button onClick = {()=>{
        getIndianCricketTeam();
      }}
      >Get indianCricketTeam</button>

  <button onClick = {()=>{
        getAusCricketTeam();
      }}
      >Get ausCricketTeam</button>

      {cast.map((ele,i)=>{
      return <h2 key={i}>{ele}</h2>
      })}
    </div>
  );
}

export default App;
