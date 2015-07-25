import React from 'react';

if (__CLIENT__) {
  require('./MainSection.scss');
}

export default class MainSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-section">
        <h1>Component MainSection</h1>
      </div>
    );
  }

}

MainSection.proptypes = {};
MainSection.defaultProps = {};
