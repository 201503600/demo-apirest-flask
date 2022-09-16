import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ruta = 'http://localhost:5000/song';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    root2: {
      width: 400,
      display: 'inline-block',
    },
    center: {
      alignContent: 'center'
    }
}));

function Crear() {
    const classes = useStyles();
    const [song, setSong] = React.useState('');
    const [year, setYear] = React.useState('');
    
    function handleSong(event) {
        setSong(event.target.value);
    }
    function handleYear(event) {
        setYear(event.target.value);
    }
    async function handleInicio() {
        //user, email
        let config = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST, GET",
              "Access-Control-Request-Method": "*",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            },
            body: JSON.stringify({
                song: song,
                year: year,
            }),
            mode: "cors",
        };

        try {
            let response = await fetch(ruta + "/first", config);
            let data = await response.json();
            if (data.success === true) {
              alert('Cancion agregada');
            }else{
                alert('No se agrego la cancion');
            }
          } catch (error) {
            alert('Hubo un error');
          }
        setSong('');
        setYear('');
    }

    async function handleFinal() {
      //user, email
      let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET",
            "Access-Control-Request-Method": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          body: JSON.stringify({
              song: song,
              year: year,
          }),
          mode: "cors",
      };

      try {
          let response = await fetch(ruta + "/last", config);
          let data = await response.json();
          console.log(data)
          if (data.success === true) {
            alert('Cancion agregada');
          }else{
              alert('No se agrego la cancion');
          }
        } catch (error) {
          alert('Hubo un error');
        }
      setSong('');
      setYear('');
  }
  
    return (
        <Card className={classes.root2}>
        <CardContent>
          <TextField required id="standard-required" label="Song" fullWidth onChange={handleSong} value={song}/>
          <br/>
          <br/>
          <TextField required id="standard-required" label="Year" fullWidth onChange={handleYear} value={year}/>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleInicio}>Agregar al inicio</Button>
            <Button size="small" onClick={handleFinal}>Agregar al final</Button>
        </CardActions>
      </Card>
    );
}
  
export default Crear;  