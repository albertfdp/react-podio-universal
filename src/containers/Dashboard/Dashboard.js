import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../actions/todoActions';

import Header from '../../components/Header/Header';

if (__CLIENT__) {
  require('./Dashboard.scss');
}

@connect(state => ({
  todos: state.todo.data
}))
export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
      </div>
    );
  }

  static fetchData(store) {
    return store.dispatch(TodoActions.load());
  }

}

Dashboard.proptypes = {
  todos: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired
};
Dashboard.defaultProps = {};
