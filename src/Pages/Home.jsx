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
    loaderUrl: "/public/Build (1)/Build/Builds.loader.js",
    dataUrl: "/public/Build (1)/Build/Builds.data.br",
    frameworkUrl: "/public/Build (1)/Build/Builds.framework.js.br",
    codeUrl: "/public/Build (1)/Build/Builds.wasm.br",
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
    height:"190vh"
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
    marginTop:theme.spacing(5),
    height:"100vh",
    width:"95vw",
  },
}))