import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Box, Button, Card, CardContent, Grid, TextField, Typography, makeStyles } from '@material-ui/core';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BarChart_diferencias from '../Charts/BarChart_diferencias';
import PieChart_diferencias from '../Charts/PieChart_diferencias';

const Administrator = () => {
  const classes= useStyles()
  const [body, setBody] = useState({firstname:'', lastname:'', password_hash:'', manager:''});
  const [id, setId] = useState('');
  const navigate = useNavigate()

  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }

  useEffect(() => {
    document.title = 'Admin'
  }, []);

  const onSubmit = () =>{
    axios.post('https://info-api.herokuapp.com/player_user/', body)
      .then(response => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  const onSubmit2 = () =>{
    axios.delete(`https://info-api.herokuapp.com/player_user/${id}/`,id)
  }

  const onSubmit3 = () =>{
    localStorage.removeItem('token')
    navigate("/login")
  }

  return (
    <div className={classes.root}>
      <Header/>
      <Box height={70}/>
      <Box component="main" sx={{display:"flex", flexGrow: 20, p:3}} className={classes.principalContainer}>
        <Grid container>
          <Grid item xs={9}>
            <Card className={classes.bodyPrincipalCart}>
              <CardContent>
                <Typography variant='h4'>Juego: "Esquivar Objetos"</Typography>
                <BarChart/>
                <PieChart/>
              </CardContent>
            </Card>
          </Grid>
          <div className={classes.container}>
            <Grid item xs={3}>
              <Card className={classes.bodyCart}>
                <CardContent>
                <Typography component='h1' variant='h5'>Añadir Usuario</Typography>
                <form className={classes.form}>
                  <TextField
                    fullWidth
                    autoFocus
                    type='text'
                    margin="normal"
                    variant="filled"
                    label='First name'
                    name='firstname'
                    value={body.firstname}
                    onChange={inputChange}
                  />
                  <TextField
                    fullWidth
                    autoFocus
                    type='text'
                    margin="normal"
                    variant="filled"
                    label='Last name'
                    name='lastname'
                    value={body.lastname}
                    onChange={inputChange}
                  />
                  <TextField
                    fullWidth
                    type='password'
                    margin="normal"
                    variant="filled"
                    label='Password'
                    name='password_hash'
                    value={body.password_hash}
                    onChange={inputChange}
                  />
                  <TextField
                    fullWidth
                    type='text'
                    margin="normal"
                    variant="filled"
                    label='/manager_user/#id/'
                    name='manager'
                    value={body.manager}
                    onChange={inputChange}
                  />
                  <Button fullWidth variant="text" onClick={onSubmit}>
                    Agregar
                  </Button>
                </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.bodyCart2}>
                <CardContent>
                <Typography component='h1' variant='h5'>Eliminar Usuario</Typography>
                <form className={classes.form}>
                  <TextField
                    fullWidth
                    type='text'
                    margin="normal"
                    variant="filled"
                    label='ID de Usuario'
                    name='id'
                    value={id}
                    onChange={e => setId(e.target.value)}
                  />
                  <Button fullWidth variant="text" onClick={onSubmit2}>
                    Eliminar
                  </Button>
                </form>
                </CardContent>
              </Card>
            </Grid>
            <Button className= {classes.button} onClick={onSubmit3}>
              Log Out
            </Button>
          </div>
          <Grid item xs={9}>
            <Card className={classes.bodyPrincipalCart}>
              <CardContent>
                <Typography variant='h4'>Juego: "Encontrar Riesgos"</Typography>
                <BarChart_diferencias/>
                <PieChart_diferencias/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#dcdcdc",
    height:"300vh"
  },
  stack:{
    display:"flex"
  },
  bodyPrincipalCart:{
    margin: theme.spacing(1),
    height: "140vh"
  },
  bodyCart:{
    margin: theme.spacing(1),
    height: "70vh",
    width:"40vh"
  },
  bodyCart2:{
    margin: theme.spacing(1),
    height: "40vh",
    width:"40vh"
  },
  container:{
    display: "flex",
    flexDirection: "column",
    width:"10vw"
  },
  button:{
    height:"10vh"
  }

}))

export default Administrator