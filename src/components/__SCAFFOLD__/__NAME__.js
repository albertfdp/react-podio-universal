import React from 'react';

if (__CLIENT__) {
  require('./__NAME__.scss');
}

export default class __NAME__ extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="__NAME-PARAMCASE__">
        <h1>Component __NAME__</h1>
      </div>
    );
  }

}

__NAME__.proptypes = {};
__NAME__.defaultProps = {};
