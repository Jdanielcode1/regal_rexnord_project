import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/regalrexnord-logo.webp';

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <AppBar position='sticky' elevation={0} className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={()=> navigate("/")}>
                    <img src={logo} alt='Logo' className={classes.image}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#cdcdcd",
        top: 0,
        left: 0,
        right: 0,
        boxShadow: theme.shadows[3],
        padding: 0,
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
    },
    image: {
        width: "200px",
        cursor: "pointer",
    },
  }));

export default Header