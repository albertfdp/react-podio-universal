import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../actions/todoActions';

import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';

if (__CLIENT__) {
  require('./TodoApp.scss');
}

@connect(state => ({
  todos: state.todo.todos
}))
export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    return (
      <section className="todoapp">
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </section>
    );
  }

  static fetchData(store) {
    return store.dispatch(TodoActions.load());
  }

}

TodoApp.proptypes = {
  todos: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired
};
TodoApp.defaultProps = {};
