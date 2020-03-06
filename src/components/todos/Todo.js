import React from 'react'
import Todo from './Todo'
 
class TodosContainer extends Component {
 
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
export default Todo;