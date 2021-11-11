import {connect} from 'react-redux';
import Util from '../../actions/todo_actions'
import TodoDetailView from './todo_detail_view';
import { receiveSteps } from '../../actions/step_actions'

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: todo => {
      return dispatch(Util.removeToDo(todo));
    },
    receiveSteps: steps => {
      return dispatch(receiveSteps(steps))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)