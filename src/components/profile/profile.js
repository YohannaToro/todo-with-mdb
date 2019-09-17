import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from '../todoApp'
import Side from '../complements/sideBar'


const useStyles = makeStyles(theme => ({
  drawerHeader: {
    padding: theme.spacing(0, 12),
    ...theme.mixins.toolbar
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  return (
    <div >
      <CssBaseline />
      <AppBar>
        <Toolbar className="nav-changes">
          <Side/>
        </Toolbar>
      </AppBar>

      <main className="prueba over">
        <div className={classes.drawerHeader} />
        <div className="title">
      <h3>My Tasks</h3>
      <small>February 8,2015</small>
    </div>
     <div className="title">
     
   
        <TodoList />

      

    </div>
      </main>
    </div>
  );
}
