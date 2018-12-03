import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import mainLogo from '../images/logo.png';


const styles = {
  bigAvatar: {
    margin: 0,
    width: 80,
    height: 80,
  },
};
class Title extends React.Component{
    render(){
        const { classes } = this.props;
        return (
          <Grid container justify="center" alignItems="center">
            <Avatar alt="logo" src={mainLogo} className={classes.bigAvatar} />
            <h1>iWeather</h1>
          </Grid>
        );
    }
}

export default  withStyles(styles)(Title); 

