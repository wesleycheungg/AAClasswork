import {connect} from 'react-redux';
import StepList from "./step_list"
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions'


const mapStateToProps = (state) => {
    return {
        steps: stepsByTodoId(state)
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        receiveStep: step => {
            return dispatch(receiveStep(step))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList)