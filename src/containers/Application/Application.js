import React from 'react';

if (__CLIENT__) {
  require('./Application.scss');
}

export default class Application extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="application">
        {this.props.children}
      </div>
    );
  }

}

Application.proptypes = {
  children: React.PropTypes.any
};
Application.defaultProps = {};
