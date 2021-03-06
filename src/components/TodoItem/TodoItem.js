import React, { PropTypes } from 'react';
import TodoTextInput from '../TodoTextInput/TodoTextInput';
import classnames from 'classnames';

if (__CLIENT__) {
  require('./TodoItem.scss');
}

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    const { todo, markTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text} editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle' type='checkbox' checked={todo.marked === 'true'}
            onChange={() => markTodo(todo.id, todo.marked)} />
          <label onDoubleClick={::this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className='destroy' onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li className={
        classnames({
          completed: todo.marked === 'true',
          editing: this.state.editing
        })}>
        {element}
      </li>
    );
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

}

TodoItem.proptypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodo: PropTypes.func.isRequired
};
TodoItem.defaultProps = {};
