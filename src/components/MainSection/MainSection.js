import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../constants/TodoFilters';

if (__CLIENT__) {
  require('./MainSection.scss');
}

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !(todo.marked === 'true'),
  [SHOW_MARKED]: todo => (todo.marked === 'true')
};

export default class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: SHOW_ALL
    };
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );

    return (
      <section className='main'>
        {this.renderToggleAll(markedCount)}
        <ul className='todo-list'>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }

  renderToggleAll(markedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input className='toggle-all' type='checkbox'
          checked={markedCount === todos.length} onChange={actions.markAll} />
      )
    }
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer markedCount={markedCount}
          unmarkedCount={unmarkedCount}
          filter={filter}
          onClearMarked={::this.handleClearMarked}
          onShow={::this.handleShow} />
      );
    }
  }

  handleClearMarked() {
    const atLeastOneMarked = this.props.todos.some(todo => (todo.marked === 'true'));
    if (atLeastOneMarked) {
      this.props.actions.clearMarked();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

}

MainSection.proptypes = {
  todos: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};
MainSection.defaultProps = {};
