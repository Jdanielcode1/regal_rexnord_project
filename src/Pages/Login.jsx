import { Grid, makeStyles , Container, Paper, Avatar, Typography, TextField, Button} from "@material-ui/core"
import { useEffect, useState } from "react"
import Background from '../assets/regal-rexnord.webp'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const classes = useStyles()
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [listPersona, setListPersona] = useState([])
    const navigate = useNavigate()

    const getPersona = async() =>{
      const {data} = await axios.get("https://info-api.herokuapp.com/manager_user/")
      setListPersona(data)
      console.log(data)
    }

    useEffect(() => {
      document.title = 'Login',
      getPersona(),
      localStorage.removeItem("token")
    }, []);

    const onSubmit= (e) =>{
      e.preventDefault()

      const nombreEncontrado = listPersona.find( (usuario)=> usuario.firstname === firstName);
      const apellidoEncontrado = listPersona.find( (usuario)=> usuario.lastname === lastName);
      const contraseñaEncontrada = listPersona.find( (usuario)=> usuario.password_hash === password);

      if (nombreEncontrado && apellidoEncontrado && contraseñaEncontrada) {
        console.log("si se pudo")
        localStorage.setItem("token", true)
        navigate("/administrator")
        return;
      }
    }

    
    return (
      <div>
        <Grid container component="main" className={classes.root}>
          <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
            <div className={classes.div}>
              <Avatar></Avatar>
              <Typography component='h1' variant='h5'>Log In</Typography>
              <form className={classes.form}>
                <TextField
                  fullWidth
                  autoFocus
                  type='text'
                  margin="normal"
                  variant="filled"
                  label='First name'
                  name='firstname'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                  fullWidth
                  autoFocus
                  type='text'
                  margin="normal"
                  variant="filled"
                  label='Last name'
                  name='lastname'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <TextField
                  fullWidth
                  type='password'
                  margin="normal"
                  variant="filled"
                  label='Password'
                  name='password_hash'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Button fullWidth variant="text" onClick={onSubmit}>
                  Enter
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
      </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
      height: '100vh',
      backgroundImage: `url(${Background})`,
      objectFit:'contain',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
      
    },
    container:{
      height:'70%',
      opacity:'0.8',
      marginTop:theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
        marginTop: 0,
        width: '100%',
        height:'100%'
      }
    },
    div:{
      marginTop: theme.spacing(8),
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    form:{
      width:'100%',
      marginTop: theme.spacing(1)
    }
  }))  

export default Login