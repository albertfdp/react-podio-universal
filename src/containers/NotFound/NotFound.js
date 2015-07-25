import React from 'react';

if (__CLIENT__) {
  require('./NotFound.scss');
}

export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="not-found">
        <h1>Uoh! 404!</h1>
      </div>
    );
  }

}

NotFound.proptypes = {};
NotFound.defaultProps = {};
