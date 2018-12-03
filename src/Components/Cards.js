import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  card: {
    maxWidth: 400,
    background:'transparent',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    background: 'transparent',
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.primary,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class WeatherCards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        {/* <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              { this.props.country}
            </Avatar>
          }
          title={ <h1>{this.props.city}</h1>}
        />
        
        <CardContent>
          <Typography component="p">
          <h1>&emsp;&emsp;&emsp;&emsp;&emsp;{ this.props.temprature} &#8451;</h1>
          </Typography>
          <h4>&emsp;&emsp;&emsp;&emsp;&emsp;___________________________</h4>
          <Typography component="p">
          <subtitle1>Wind&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Humidity</subtitle1>
          <h3>&nbsp;{ this.props.wind}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          { this.props.humidity}%</h3>
          </Typography>
          <h4>&emsp;&emsp;&emsp;&emsp;&emsp;___________________________</h4>
          <Typography component="p">
          <subtitle1>Description</subtitle1>
          <h3>&nbsp;{ this.props.description}</h3>
          </Typography>
        </CardContent> */}
        <div className={classes.root}>
        <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar aria-label="Recipe" className={classes.avatar}>
              { this.props.country}
            </Avatar>
            <h1>{this.props.city}</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h1>{ this.props.temprature}&#8451;</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          Wind
          <br></br>
          <h4>{ this.props.wind}</h4>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          Humidity
          <br></br>
          <h4>{ this.props.humidity}</h4>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          Description
          <br></br>
          <h4>{ this.props.description}</h4>
          </Paper>
        </Grid>
      </Grid>
      </div>
      </Card>
    );
  }
}

WeatherCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCards);