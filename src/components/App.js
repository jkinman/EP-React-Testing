import React from 'react';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
          Etherparty
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
