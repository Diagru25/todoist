import './content.css'
import { Checkbox, Button } from 'antd';
import {
    CalendarOutlined,
    TagOutlined,
    FlagOutlined,
    ClockCircleOutlined,
    UnorderedListOutlined,
    DashOutlined
} from '@ant-design/icons';
import SubTask from './subTask';
import Comment from './comment';
import { useState } from 'react';


const DetailTask = (props) => {

    const [numSelected, setNumSelected] = useState(0);


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

    return (
        <div className="item-container">
            <div className="item-header">
                <div className="item-overview-content">
                    <Checkbox></Checkbox>
                    <div className='add-task-text'>
                        <input type="text" defaultValue={props.task.name} className='text-disable' placeholder='e.g Read every day' />
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
                    <Button className='btn-actions' icon={<DashOutlined />} />
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

export default DetailTask