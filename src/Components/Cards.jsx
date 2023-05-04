import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography, CardActions, makeStyles } from '@material-ui/core';

const Cards = (props) => {
  const classes= useStyles()

  return (
    <div className={classes.root}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://laverdadnoticias.com/__export/1592922444924/sites/laverdad/img/2020/06/23/lagartijas_datos_curiosos_de_la_especie.jpg_554688468.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" >
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    margin: theme.spacing(1)
  },
}))

export default Cards