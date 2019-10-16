import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/VerifiedUser';
import '../../css/drawer.scss'
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    localStorage.setItem("isLoggedin",false);
    console.log(localStorage.getItem("isLoggedin"))
  }
  const handle=()=>{
    console.log('The link was clicked jeje');
    localStorage.setItem("isLoggedin",false);
    console.log(localStorage.getItem("isLoggedin"))
  }
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
            <div className="user-profile">
      <img src="https://farm5.staticflickr.com/4136/4817542998_55a7eb8d8b_q.jpg"/>
      <div className="user-details">
        <h4>Yohanna Toro</h4>
        <p>Front-end Developer</p>
      </div>
    </div>
      <Divider />
      <List>

            <ListItem button component={Link} to="/"   onClick={handle} >
            <ListItemIcon ><MailIcon></MailIcon></ListItemIcon>
            <ListItemText>logout</ListItemText>

          </ListItem>
          <ListItem button component={Link} to="/settings/profile">
            <ListItemIcon ><MailIcon></MailIcon></ListItemIcon>
            <ListItemText>edit profile</ListItemText>

          </ListItem>
        </List>
    </div>
  );



  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} style={{color:'white'}}>Menu</Button>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}