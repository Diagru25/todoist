import './content.css';

import {Checkbox, Modal} from 'antd';
import {useState} from 'react';

import DetailTask from './detailTask'

import actions from '../../redux/content/actions'
import { connect } from 'react-redux';

const Item = (props) => {

    const[isModalVisible, setModalVisible] = useState(false);

    const checkItemHandle = (id) => {
        props.deleteTask(id);
    }

    const handleCancelModal = () => {
        props.setDefaultTask();
        setModalVisible(false);
    }

    return(
        <>
        <div className='item'>
            <Checkbox onChange={() => checkItemHandle(props.task.key)}></Checkbox>
            <li key = {props.task.key}
                className='li-item' 
                onClick={() => {props.updateCurrentTask({...props.task}); 
                setModalVisible(true)}}
            >
            <span>{props.task.name}</span>
            <p>{props.task.schedule}</p>
            </li>
        </div>
        <Modal 
            title='Inbox'
            footer={null} 
            visible={isModalVisible} 
            onCancel={handleCancelModal}
            width={650}
            style={{top: 30}}
            bodyStyle={{height: '800px'}}
        >
            <DetailTask task={props.task}/>
        </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(actions.actions.deleteTask(id)),
        setDefaultTask: () => dispatch(actions.actions.setDefaultTask()),
        updateCurrentTask: (task) => dispatch(actions.actions.updateCurrentTask(task))
    }
}

export default connect(null, mapDispatchToProps)(Item);