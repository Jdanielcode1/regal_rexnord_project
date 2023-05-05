import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";

// takes the uri or the user and returns its first name


const PieChart_diferencias = () => {
  
  const [listPersona, setListPersona] = useState([])


  const getPersona = async() =>{
    const {data} = await axios.get("https://info-api.herokuapp.com/partida_econtrar_diferencias/")
    setListPersona(data)
  }

  useEffect(() => {
    getPersona()
  }, []);


  const data =  listPersona.map(persona => [persona.player, persona.n_objects]);

  data.unshift(["Player", "Score"])

const options = {
  title: "Puntuaciones de usuarios por partida",
};
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default PieChart_diferencias