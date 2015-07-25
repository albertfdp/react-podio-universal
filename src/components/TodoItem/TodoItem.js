import React from 'react';

if (__CLIENT__) {
  require('./TodoItem.scss');
}

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-item">
        <h1>Component TodoItem</h1>
      </div>
    );
  }

}

TodoItem.proptypes = {};
TodoItem.defaultProps = {};
