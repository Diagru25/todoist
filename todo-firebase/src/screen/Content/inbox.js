import './content.css';
import {
    MessageOutlined,
    MoreOutlined,
    FilterOutlined,
    PlusOutlined,
    CalendarOutlined,
    InboxOutlined,
    TagOutlined,
    FlagOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import { Dropdown, Button } from 'antd';

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/content/actions'

import Item from './item'

function Inbox(props) {

    const [showAddBox, setShowAddBox] = useState(false)

    useEffect(() => {
        props.getTasksInbox()
    },[])

    return (
        <div>
            <header className='view-header'>
                <div className="view-header-content">
                    <h1>Inbox</h1>
                    <div className="view-header-actions">
                        <Dropdown overlay={{}} trigger={['click']}>
                            <Button icon={<MessageOutlined />} />
                        </Dropdown>
                        <Dropdown overlay={{}} trigger={['click']}>
                            <Button icon={<FilterOutlined />} />
                        </Dropdown>
                        <Dropdown overlay={{}} trigger={['click']}>
                            <Button icon={<MoreOutlined />} />
                        </Dropdown>
                    </div>
                </div>
            </header>
            <div className="view-content">
                <ul>
                    {props.allTask.map(task => <Item key={task.key} task={task}/>)}
                </ul>
            </div>
            <div className={showAddBox ? "box-add-task" : "box-add-task hidden"}>
                <div className="box-add-task-content">
                    <div className='add-task-text'>
                        <input type="text" placeholder='e.g Read every day' />
                    </div>
                    <div className='add-task-options'>
                        <div>
                            <Button type='default' className='btn-view' icon={<CalendarOutlined />}>Schedule</Button>
                            <Button type='default' className='btn-view' icon={<InboxOutlined style={{ color: '#246fe0' }} />}>Inbox</Button>
                        </div>
                        <div className='add-task-actions'>
                            <Button className='btn-actions' icon={<TagOutlined />} />
                            <Button className='btn-actions' icon={<FlagOutlined />} />
                            <Button className='btn-actions' icon={<ClockCircleOutlined />} />
                            <Button className='btn-actions' icon={<MessageOutlined />} />
                        </div>
                    </div>

                </div>
                <button className='btn btn-add'>
                    Add task
                </button>
                <Button type='text'
                    onClick={() => setShowAddBox(false)}
                >
                    Cancel
                </Button>
            </div>
            <div className={showAddBox ? "view-add-task hidden" : "view-add-task"}>
                <button className="btn-add-task"
                    onClick={() => setShowAddBox(true)}
                >
                    <PlusOutlined className='icon-add' />
                    <span>Add Task</span>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allTask: state.contentReducer.allTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTasksInbox: () => dispatch(actions.actions.getTasksInbox())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);