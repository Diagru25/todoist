
import { connect } from "react-redux";
import actions from "../../../redux/Menu/actions";

const ModalLabel = (props) => {

    return (
        <div>
            <div className="form-item">
                <p>Name:</p>
                <input type="text" value={props.currentLabel.name} onChange={(e) => props.updateCurrentLabel({name: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Description:</p>
                <input type="text" value={props.currentLabel.description} onChange={(e) => props.updateCurrentLabel({description: e.target.value })} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentLabel: state.menuReducer.currentLabel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentLabel: (label) => dispatch(actions.actions.updateCurrentLabel(label))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLabel);