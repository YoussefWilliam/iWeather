import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


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

  
class Database extends React.Component{
render() {
    const { classes } = this.props;
        return (
            <Card className={classes.card}>
             <div className={classes.root}>
                 <Paper className={classes.paper}>
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        { this.props.country}
                    </Avatar>
                        <ListItem>
                            <h4>{this.props.city} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                            <h3>{ this.props.temprature}&#8451;</h3>
                        </ListItem>
                        <Divider/>
                </Paper>
            </div>
        </Card>
        );
    }


    
}

export default  withStyles(styles)(Database);