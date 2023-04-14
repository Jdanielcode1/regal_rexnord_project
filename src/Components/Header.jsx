import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/RRX-cae5b038.png';

const Header = () => {
    const classes = useStyles();
    const history = useNavigate();
    const [show, setShow]= useState(false);

    const hideHeader = () =>{
        if (window.scrollY > 100){
            setShow(true);
        } else{
            setShow(false);
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", hideHeader);
        return ()=>window.removeEventListener("scroll",hideHeader);
    }, []);

    return (
        <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
                <IconButton onClick={()=> history("/home")}>
                    <img src={logo} alt='Logo' className={classes.image}/>
                </IconButton>
                
                <Avatar variant='square' style={{cursor: "pointer"}} onClick={()=> history("/profile")}/>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles({
    root:{
        backgroundColor: "#111",
        top: 0,
        left: 0,
        right: 0,
    },
    transparent:{
        backgroundColor: "transparent",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
    },
    image: {
        width: "50px",
        cursor: "pointer",
    },
  });

export default Header