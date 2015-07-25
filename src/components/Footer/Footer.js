import React from 'react';

if (__CLIENT__) {
  require('./Footer.scss');
}

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <h1>Component Footer</h1>
      </div>
    );
  }

}

Footer.proptypes = {};
Footer.defaultProps = {};
