import { useState } from 'react';
import { Button } from 'antd';
import {
    CalendarOutlined,
    TagOutlined,
    FlagOutlined,
    ClockCircleOutlined,
    MessageOutlined,
    PlusOutlined
} from '@ant-design/icons';

const SubTask = (props) => {

    const [showAddBox, setShowAddBox] = useState(false)

    return (
        <div>
            <div className={showAddBox ? "box-add-task" : "box-add-task hidden"} style={{border: 'none'}}>
                <div className="box-add-task-content">
                    <div className='add-task-text'>
                        <input type="text" placeholder='e.g Read every day' />
                    </div>
                    <div className='add-task-options'>
                        <div>
                            <Button type='default' className='btn-view' icon={<CalendarOutlined />}>Schedule</Button>
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
                    Add sub-task
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
                    <span>Add sub-task</span>
                </button>
            </div>
        </div>
    );
}

export default SubTask;