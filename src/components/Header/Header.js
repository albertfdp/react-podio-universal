import React from 'react';
import TodoTextInput from '../TodoTextInput/TodoTextInput';

if (__CLIENT__) {
  require('./Header.scss');
}

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo={true} onSave={::this.handleSave} placeholder='What needs to be done?' />
      </header>
    );
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

}

Header.proptypes = {
  addTodo: React.PropTypes.func.isRequired
};
Header.defaultProps = {};
