import { Radio } from 'antd';
import { FlagFilled } from "@ant-design/icons";
import actions from '../../../redux/Menu/actions';
import { connect } from 'react-redux';

const ModalFilter = (props) => {

    return (
        <div>
            <div className="form-item">
                <p>Name:</p>
                <input type="text" value={props.currentFilter.name} onChange={(e) => props.updateCurrentFilter({ name: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Description:</p>
                <input type="text" value={props.currentFilter.description} onChange={(e) => props.updateCurrentFilter({ description: e.target.value })} />
            </div>
            <div className="form-item">
                <p>Color</p>
                <div className="color-box">
                    <Radio.Group onChange={(e) => props.updateCurrentFilter({ color: e.target.value })} value={props.currentFilter.color}>
                        <Radio value={'#d1453b'}><FlagFilled style={{color: '#d1453b'}} /></Radio>
                        <Radio value={'#eb8909'}><FlagFilled style={{color: '#eb8909'}} /></Radio>
                        <Radio value={'#246fe0'}><FlagFilled style={{color: '#246fe0'}} /></Radio>
                        <Radio value={''}><FlagFilled style={{color: ''}} /></Radio>
                    </Radio.Group>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentFilter: state.menuReducer.currentFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentFilter: (filter) => dispatch(actions.actions.updateCurrentFilter(filter))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalFilter);