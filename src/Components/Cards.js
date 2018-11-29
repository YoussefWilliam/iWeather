import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
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
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              { this.props.country}
            </Avatar>
          }
          title={ this.props.city}
        />
        
        <CardContent>
          <Typography component="p">
          <h1>{ this.props.temprature} &#8451;</h1>
          </Typography>
        </CardContent>

        <CardContent>
          <Typography component="p">
          <h2>Wind:{ this.props.wind} </h2>
          </Typography>
          <Typography component="p">
          <h4> Humidity:{ this.props.humidity}</h4>
          </Typography>
            <h3>Description:</h3>
            <Typography paragraph>
              <h4> { this.props.description}</h4>
            </Typography>
        </CardContent>
      </Card>
    );
  }
}

WeatherCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCards);