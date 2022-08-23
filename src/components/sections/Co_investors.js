import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../elements/Image";
import {Box,Card,CardHeader} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(0.6),
        },
      },
    })
  );
  
  function Co_investors() {
    const classes = useStyles();
    return (
     
      <Box className={classes.root} >
        
        <Card  style={{backgroundColor:"#f9faf9"}}>
          <CardHeader
            avatar={ <Image
                src={require('./../../assets/images/Lh.jpg')}
                alt="Features tile icon 01"
                width={80}
                height={80} />}
            title="Un Correlated Ventures"
            subheader="Early-stage infrastructures software VC"
        
          />&nbsp;
            <p style={{color:"grey"}} align="center">Uncorrelated Ventures invests early in <br/> infrastructures  software,traditonal and<br/>decentralized.The firm has investsted <br/> $300M+ in 60+ companies.</p>
        </Card>

        <Card style={{backgroundColor:"#f9faf9"}} >
          <CardHeader
            avatar={ <Image
                src={require('./../../assets/images/Avatara.jpg')}
                alt="Features tile icon 01"
                width={80}
                height={80} />}
            title="Calm Ventures"
            subheader="Early-stage infrastructures software VC"
        
          />&nbsp;
            <p style={{color:"grey"}} align="center">Uncorrelated Ventures invests early in <br/> infrastructures  software,traditonal and<br/>decentralized.The firm has investsted <br/> $300M+ in 60+ companies.</p>
        </Card>
        <Card style={{backgroundColor:"#f9faf9"}}>
          <CardHeader
            avatar={ <Image
                src={require('./../../assets/images/Lh.jpg')}
                alt="Features tile icon 01"
                width={80}
                height={80} />}
            title="Un Correlated Ventures"
            subheader="Early-stage infrastructures software VC"
        
          />&nbsp;
            <p style={{color:"grey"}} align="center">Uncorrelated Ventures invests early in <br/> infrastructures  software,traditonal and<br/>decentralized.The firm has investsted <br/> $300M+ in 60+ companies.</p>
        </Card>
        </Box>
      
      
    );
  }
  
  export default Co_investors;