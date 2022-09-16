import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ruta = 'http://localhost:5000/song';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
    margin: {
        padding: 30
    },
  });
  
  export default function Visualizar() {
    const [rows, setRows] = React.useState([]);
    const classes = useStyles();

    useEffect(() => {
        const timer = setTimeout(() => {
          //console.log('This will run after 1 second!')
          handleVisualizar();
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    async function handleVisualizar(){
        let config = {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST, GET",
              "Access-Control-Request-Method": "*",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            },
            mode: "cors",
        };

        try {
            let response = await fetch(ruta, config);
            let data = await response.json();
            //console.log(data)
            if (data.success) {
                setRows(data.success);
            }else{
                alert('No se pudieron obtener los datos');
            }
            console.log(data);
        } catch (error) {
            alert('Hubo un error');
        }
    }
  
    return (
      <TableContainer component={Paper}>
        <br/>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.song}>
                <TableCell component="th" scope="row">
                  {row.song}
                </TableCell>
                <TableCell>{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }