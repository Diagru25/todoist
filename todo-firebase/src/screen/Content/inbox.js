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

function Inbox(props) {

    const [showAddBox, setShowAddBox] = useState(false)

    useEffect(() => {
        props.getTasksInbox()
    },[])

    // console.log('all task in inbox component: ', props.allTask[0])
    console.log('all task in inbox component: ', props.allTask)
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
                    {props.allTask.map(task => <li key={task.key}>{task.name}</li>)}
                </ul>
            </div>
            <div className={showAddBox ? "box-add-task" : "box-add-task hidden"}>
                <div className="box-add-task-content">
                    <div className='add-task-text'>
                        <input type="text" placeholder='e.g Read every day' />
                    </div>
                    <div className='add-task-options'>
                        <div>
                            <Button type='default' icon={<CalendarOutlined />}>Schedule</Button>
                            <Button type='default' icon={<InboxOutlined style={{ color: '#246fe0' }} />}>Inbox</Button>
                        </div>
                        <div className='add-task-actions'>
                            <Button icon={<TagOutlined />} />
                            <Button icon={<FlagOutlined />} />
                            <Button icon={<ClockCircleOutlined />} />
                            <Button icon={<MessageOutlined />} />
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