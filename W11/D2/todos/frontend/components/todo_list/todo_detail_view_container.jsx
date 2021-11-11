import {connect} from 'react-redux';
import Util from '../../actions/todo_actions'
import TodoDetailView from './todo_detail_view';
const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: todo => {
      return dispatch(Util.removeToDo(todo));
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)