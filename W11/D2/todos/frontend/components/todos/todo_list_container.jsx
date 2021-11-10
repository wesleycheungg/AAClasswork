import {connect} from 'react-redux';
import TodoList from './todo_list';
import { allToDos } from '../../reducers/selectors';
import {receiveTodo} from '../../actions/todo_actions'
const mapStateToProps = (state) => {
  return {
    todos: allToDos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => {
      return dispatch(receiveTodo(todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);