import React from 'react';
import classnames from 'classnames';

if (__CLIENT__) {
  require('./TodoTextInput.scss');
}

export default class TodoTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    };
  }

  render() {

    const classes = classnames({
      edit: this.props.editing,
      'new-todo': this.props.newTodo
    });

    return (
      <input className={classes} type='text' placeholder={this.props.placeholder}
        autoFocus='true' value={this.state.text} onBlur={::this.handleBlur}
        onChange={::this.handleChange} onKeyDown={::this.handleSubmit} />
    );
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

}

TodoTextInput.proptypes = {
  onSave: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  editing: React.PropTypes.bool,
  newTodo: React.PropTypes.bool
};
TodoTextInput.defaultProps = {};
