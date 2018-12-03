import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SelectedListItem extends React.Component {
  state = {
    selectedIndex: 1,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
<Divider/>
        <List component="nav">
          <ListItem
            button
          >
            <ListItemText primary={this.props.primary} />
           <h3> &#8451;</h3>
          </ListItem>
          <Divider/>

        </List>
        <Divider/>
        
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);
 

 