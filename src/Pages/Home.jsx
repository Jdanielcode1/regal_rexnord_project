import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core"
import Header from '../Components/Header';
import { Unity, useUnityContext } from 'react-unity-webgl';

export const Home = () => {
  
  const classes = useStyles()
  useEffect(() => {
    document.title = 'Home'
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/Assets/Pong2D.loader.js",
    dataUrl: "/public/Assets/Pong2D.data",
    frameworkUrl: "/public/Assets/Pong2D.framework.js",
    codeUrl: "/public/Assets/Pong2D.wasm",
  });

  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.container}>
        <Unity
          className={classes.game_display}
          unityProvider={unityProvider}/>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#dcdcdc",
    height:"110vh"
  },
  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center",
    margin:0,
  },
  game_display:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center",
    marginTop:theme.spacing(10),
    height:"60vh",
    width:"80vw",
  },
}))