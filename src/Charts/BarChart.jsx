import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";

const BarChart = () => {
  const [listPersona, setListPersona] = useState([])


  const getPersona = async() =>{
    const {data} = await axios.get("https://info-api.herokuapp.com/partida_falling_objects/")
    setListPersona(data)
    console.log(data)
  }

  useEffect(() => {
    getPersona()
  }, []);

  const data =  listPersona.map(persona => [persona.id, persona.score, persona.time_taken]);
  data.unshift(["Player", "Score", "Time"])

  const options = {
    title: "Score for the game 'Falling Objects'",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total Score",
      minValue: 0,
    },
    vAxis: {
      title: "Player",
    },
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart