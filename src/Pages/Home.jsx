import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core"
import Header from '../Components/Header';

export const Home = () => {
  
  const classes = useStyles()

  useEffect(() => {
    document.title = 'Home'
  }, []);

  return (
    <>
    <Header/>
    <div className={classes.container}>
      <div className={classes.game_display}>
        game
      </div>
    </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center"
  },
  game_display:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center",
    backgroundColor: "green",
    marginTop:theme.spacing(10),
    height:theme.spacing(50),
    width:theme.spacing(120),
  }
}))