import {connect} from 'react-redux';
import TodoList from './todo_list';
import { allToDos } from '../../reducers/selectors';
import Util from '../../actions/todo_actions'
const mapStateToProps = (state) => {
  return {
    todos: allToDos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => {
      return dispatch(Util.receiveTodo(todo));
    },
    removeTodo: todo => {
      return dispatch(Util.removeTodo(todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);