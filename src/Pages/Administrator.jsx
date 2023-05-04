import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Box, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import Cards from '../Components/Cards';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
const Administrator = () => {

  const classes= useStyles()
  
  useEffect(() => {
    document.title = 'Admin'
  }, []);

  return (
    <div className={classes.root}>
      <Header/>
      <Box height={70}/>
      <Box component="main" sx={{display:"flex", flexGrow: 1, p:3}}>
        <Grid container >

          <Grid item xs={9}>
            <div className={classes.stack}>
              <Cards 
                title="Nombre del Jugador"
                description= "Jugador con mayor puntuacion del juego 1 "
                />
              <Cards
                title="Nombre del Jugador"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                />
            </div>
          </Grid>

          <Grid item xs={3}>
            <Cards/>
            <Cards/>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={9}>
            <Card className={classes.bodyCart}>
              <CardContent>
                <BarChart/>
                <PieChart/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#dcdcdc",
    height:"165vh"
  },
  stack:{
    display:"flex"
  },
  bodyCart:{
    margin: theme.spacing(1),
    height: "130vh"
  }
}))

export default Administrator