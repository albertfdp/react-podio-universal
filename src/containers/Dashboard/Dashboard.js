import React from 'react';

if (__CLIENT__) {
  require('./Dashboard.scss');
}

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Component Dashboard</h1><small>it works!</small>
      </div>
    );
  }

}

Dashboard.proptypes = {};
Dashboard.defaultProps = {};
