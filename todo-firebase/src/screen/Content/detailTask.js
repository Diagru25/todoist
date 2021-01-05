import './content.css'
import { Checkbox, Button, Menu, Dropdown, message } from 'antd';
import {
    CalendarOutlined,
    TagOutlined,
    FlagOutlined,
    ClockCircleOutlined,
    UnorderedListOutlined,
    DashOutlined,
    EditOutlined,
    MailOutlined,
    LinkOutlined,
    CheckCircleOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import SubTask from './subTask';
import Comment from './comment';
import actions from '../../redux/content/actions';
import { useState } from 'react';
import { connect } from 'react-redux';




const DetailTask = (props) => {

    const [numSelected, setNumSelected] = useState(0);

    const handleMenuClick = (e) => {
        let key = e.key;

        switch (key) {
            case 'rename':
                let inputTaskName = document.getElementById(props.task.key);
                inputTaskName.readOnly = false;
                inputTaskName.focus();

                message.info('Press enter to save, please !');
                return
            case 'addCmt':
                message.warning('feature not done !');
                return
            case 'copyLink':
                message.warning('feature not done !');
                return
            case 'hideSubTask':
                message.warning('feature not done !');
                return
            case 'delete':
                message.warning('feature not done !');
                return
            default:
                return
        }
    }

    const tabSelected = () => {

        let tabContent = <div>Detail not found !</div>
        switch (numSelected) {
            case 0:
                return tabContent = <SubTask subTasks={props.task.SubTask ? props.task.SubTask : []} />
            case 1:
                return tabContent = <Comment comments={props.task.comment ? props.task.comment : []} />
            default:
                return tabContent
        }
    }

    const handleInputBlur = (e) => {
        let val = e.target.value;
        if (val === '') {
            message.error('Task name can not empty !');
            e.target.focus();
        }

        return;
    }

    const handleInputKeyPress = (e) => {
        let keyPress = e.key;
        if(keyPress === 'Enter')
            props.saveCurrentTask(props.currentTask);
        
        return;
    }

    const handleInputOnChange = (e) => {
        let val = e.target.value;
        props.updateCurrentTask({...props.currentTask, name: val});
    }

    const menuActions = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key='rename'>
                <EditOutlined />
                Rename task
            </Menu.Item>
            <Menu.Item key='addCmt'>
                <MailOutlined />
                Add comments via email
            </Menu.Item>
            <Menu.Item key='copyLink'>
                <LinkOutlined />
                Copy link to task
            </Menu.Item>
            <Menu.Item key='hideSubTask'>
                <CheckCircleOutlined />
                Hide completed Sub-task
            </Menu.Item>
            <Menu.Item key='hr'><hr /></Menu.Item>
            <Menu.Item key='delete'>
                <DeleteOutlined />
                Delete task
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="item-container">
            <div className="item-header">
                <div className="item-overview-content">
                    <Checkbox></Checkbox>
                    <div className='add-task-text'>
                        <input id={props.task.key} 
                        type="text" 
                        value={props.currentTask.name} 
                        className='text-disable' 
                        placeholder='e.g Read every day'
                        onBlur={handleInputBlur}
                        onKeyPress={handleInputKeyPress}
                        onChange={handleInputOnChange}
                        readOnly />
                    </div>
                </div>
                <div className="item-overview-sub">
                    <Button type='default' className='btn-view' icon={<CalendarOutlined />}>Schedule</Button>
                </div>
                <div className="item-overview-footer">
                    <Button className='btn-actions' icon={<UnorderedListOutlined />} />
                    <Button className='btn-actions' icon={<TagOutlined />} />
                    <Button className='btn-actions' icon={<FlagOutlined />} />
                    <Button className='btn-actions' icon={<ClockCircleOutlined />} />
                    <Dropdown overlay={menuActions}
                        placement='bottomCenter'
                        trigger={['click']}>
                        <Button className='btn-actions' icon={<DashOutlined />} />
                    </Dropdown>

                </div>
                <div className="tabs">
                    <div className="tabs-container">
                        <div className={numSelected === 0 ? "tab-item selected" : "tab-item"}
                            onClick={() => setNumSelected(0)}
                        >
                            <p>Sub-tasks</p>
                        </div>
                        <div className={numSelected === 1 ? "tab-item selected" : "tab-item"}
                            onClick={() => setNumSelected(1)}
                        >
                            <p>Comment</p>
                        </div>
                        <div className={numSelected === 2 ? "tab-item selected" : "tab-item"}
                            onClick={() => setNumSelected(2)}
                        >
                            <p>Activity</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                {tabSelected()}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentTask: state.contentReducer.currentTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDefaultTask: () => dispatch(actions.actions.setDefaultTask()),
        saveCurrentTask: (task) => dispatch(actions.actions.saveCurrentTask(task)),
        updateCurrentTask: (task) => dispatch(actions.actions.updateCurrentTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTask);