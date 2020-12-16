import './content.css';

import {Checkbox, Modal} from 'antd';
import {useState} from 'react';

import DetailTask from './detailTask'

const Item = (props) => {

    const[isModalVisible, setModalVisible] = useState(false)

    return(
        <>
        <div className='item'>
            <li key = {props.task.key} 
                onClick={() => setModalVisible(true)}
            >
                <Checkbox>{props.task.name}</Checkbox>
            </li>
        </div>
        <Modal 
            title='Inbox'
            footer={null} 
            visible={isModalVisible} 
            onCancel={() => setModalVisible(false)}
            width={650}
            style={{top: 30}}
            bodyStyle={{height: '800px'}}
        >
            <DetailTask task={props.task}/>
        </Modal>
        </>
    )
}

export default Item