import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';

if (__CLIENT__) {
  require('./Dashboard.scss');
}

@connect(state => ({
  todo: state.todo.data
}))
export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="dashboard">
        <h1>Component Dashboard</h1><small>it works!</small>
        <div>todo: {todo.message}</div>
      </div>
    );
  }

  static fetchData(store) {
    return store.dispatch(todoActions.load());
  }

}

Dashboard.proptypes = {};
Dashboard.defaultProps = {};
