import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './todos';

class TodosContainer extends Component {
  
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  
  render(){
    return(
      <div></div>
    )
  }
}

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(null, mapStateToProps)(TodosContainer);