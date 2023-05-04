import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";



const PieChart = () => {
  
  const [listPersona, setListPersona] = useState([])


  const getPersona = async() =>{
    const {data} = await axios.get("https://info-api.herokuapp.com/partida_falling_objects/")
    setListPersona(data)
    console.log(data)
  }

  useEffect(() => {
    getPersona()
  }, []);


  const data =  listPersona.map(persona => [persona.player, persona.score]);

  data.unshift(["Player", "Score"])

const options = {
  title: "My Daily Activities",
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

export default PieChart