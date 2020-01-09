import React, { Fragment } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Flow from './components/main/Flow';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends React.Component {
  render () {
  return (
    <React.Fragment>
        <div className="Container">
          <div className="row">
            <div className="col-3">
            <Sidebar />
            </div>
            <div className="col-9">
          {/* <ListNews />       */}
            <Flow />
            </div>
          </div>
      </div>
      


    </React.Fragment>

  );
}
}

export default App;
