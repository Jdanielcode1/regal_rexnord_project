import { Grid, makeStyles , Container, Paper, Avatar, Typography, TextField, Button} from "@material-ui/core"
import { useState } from "react"
import Background from './assets/background.jpg'

function App() {
  const classes = useStyles()
  const [body, setBody] = useState({account: '', password:''})

  const handleChange = e =>{
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit= e =>{
    console.log(body)
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
                type='email'
                margin="normal"
                variant="filled"
                label='Account'
                name='account'
                value={body.account}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                type='password'
                margin="normal"
                variant="filled"
                label='Password'
                name='password'
                value={body.password}
                onChange={handleChange}
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
    height:'60%',
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

export default App
