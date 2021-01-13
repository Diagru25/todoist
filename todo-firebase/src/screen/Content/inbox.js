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

import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/content/actions';

import Item from './item';
import ScheduleMenu from '../Menu/scheduleMenu';
import moment from 'moment';

function Inbox(props) {

    const [showAddBox, setShowAddBox] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        props.getTasksInbox();
        props.setDefaultTask();

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowSchedule(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    const addTaskHandle = () => {

        let task = { ...props.currentTask, schedule: moment().subtract(1, 'day').format("D MMM YYYY") };

        props.updateCurrentTask(task);
        props.saveCurrentTask();
        setShowAddBox(false);
    }

    const onChangeHandle = (e) => {
        let task = { ...props.currentTask, name: e.target.value };
        props.updateCurrentTask(task);
    }

    const showBoxAddHandle = () => {
        props.setDefaultTask();
        setShowAddBox(true);
    }

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
                    {props.allTask.map(task => <Item key={task.key} task={task} />)}
                </ul>
            </div>
            <div className={showAddBox ? "box-add-task" : "box-add-task hidden"}>
                <div className="box-add-task-content">
                    <div className='add-task-text'>
                        <input type="text" placeholder='e.g Read every day' value={props.currentTask.name} onChange={onChangeHandle} />
                    </div>
                    <div className='add-task-options'>
                        <div>
                            <div className='schedule' ref={ref}>
                                <Button type='default' className='btn-view' onClick={() => setShowSchedule(!showSchedule)} icon={<CalendarOutlined />}>Schedule</Button>
                                <ScheduleMenu child={showSchedule}/>
                            </div>

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
                <button
                    className='btn btn-add'
                    onClick={addTaskHandle}
                >
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
                    onClick={showBoxAddHandle}
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
        allTask: state.contentReducer.allTask,
        currentTask: state.contentReducer.currentTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTasksInbox: () => dispatch(actions.actions.getTasksInbox()),
        setDefaultTask: () => dispatch(actions.actions.setDefaultTask()),
        saveCurrentTask: (task) => dispatch(actions.actions.saveCurrentTask(task)),
        updateCurrentTask: (task) => dispatch(actions.actions.updateCurrentTask(task))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);