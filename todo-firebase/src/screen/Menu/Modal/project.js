import { connect } from "react-redux";
import actions from '../../../redux/Menu/actions';

const ModalProject = (props) => {
    
    return (
        <div>
            <div className="form-item">
                <p>Name:</p>
                <input type="text" value={props.currentProject.name} onChange={(e) => props.updateCurrentProject({name: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Description:</p>
                <input type="text" value={props.currentProject.description} onChange={(e) => props.updateCurrentProject({description: e.target.value })} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentProject: state.menuReducer.currentProject
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCurrentProject: () => dispatch(actions.actions.saveCurrentProject()),
        updateCurrentProject: (project) => dispatch(actions.actions.updateCurrentProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProject);