import React, { Component } from 'react';
import WorkerStore from './views/WorkerStore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Card Seller
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='container'>
          <WorkerStore />
        </div>
      </div>
    );
  }
}

export default App;
