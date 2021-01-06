import './content.css';
import { Avatar, Button } from 'antd';
import {
    UserOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import actions from '../../redux/content/actions'
import { connect } from 'react-redux';
import { useState } from 'react';

const Comment = (props) => {

    const [cmtValue, setCmtValue] = useState('')

    const showDate = () => {
        // let now = new Date();
        // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // let date = now.getDate();
        // let day = days[now.getDay()];
        // let month = months[now.getMonth()];
        // let year = now.getFullYear();
        // let time = now.getTime();
        // let hours = now.getHours();
        // let min = now.getMinutes();

        // console.log('Date: ', date);
        // console.log('Month: ', month);
        // console.log('Year: ', year);
        // console.log('Day: ', day);
        // console.log('Time: ', time);
        // console.log('Hours: ', hours);
        // console.log('Minutes: ', min);

        // return date + ' ' + month + ' ' + hours + ':' + min;

    }

    const addCommentHandle = () => {
        let comment = [...props.currentTask.comment];
        comment.push(cmtValue);

        //update curTask
        props.updateCurrentTask({ ...props.currentTask, comment: comment });
        props.saveCurrentTask();
    }

    return (
        <div className="comment-container">
            <div className="view-comment">
                <ul>

                    <li key='1'>
                        <div className="item-comment">
                            <Avatar size='large' icon={<UserOutlined />} />
                            <div className="box-add-task" style={{ width: '90%', margin: '0px' }}>
                                <div className="box-add-task-content">
                                    <div className='add-task-text'>
                                        <input type="text" defaultValue='value follow key of comment' />
                                    </div>

                                </div>
                                <button className='btn btn-add'>
                                    Update
                                </button>
                                <Button type='text'>
                                    Cancel
                                </Button>
                            </div>
                            {/* <div className="item-comment-detail">
                                <h4>Someone</h4>
                                <span>{showDate()}</span>
                                <div className="actions-comment">
                                    <Button className='btn-actions' icon={<EditOutlined />} />
                                    <Button className='btn-actions' icon={<DeleteOutlined />} />
                                </div>
                                <p>Content</p>
                            </div> */}
                        </div>
                    </li>

                    <li key='2'>
                        <div className="item-comment">
                            <Avatar size='large' icon={<UserOutlined />} />
                            <div className="item-comment-detail">
                                <h4>Someone</h4>
                                <span>{showDate()}</span>
                                <div className="actions-comment">
                                    <Button className='btn-actions' icon={<EditOutlined />} />
                                    <Button className='btn-actions' icon={<DeleteOutlined />} />
                                </div>
                                <p>{props.currentTask.comment[0]}</p>

                            </div>
                        </div>
                    </li>

                </ul>

            </div>
            <div className="add-comment">
                <div className='add-task-text'>
                    <input type="text" placeholder='Add a comment' value={cmtValue} onChange={(e) => setCmtValue(e.target.value)}/>
                </div>
                <hr />
                <button className='btn btn-add' onClick={addCommentHandle}>
                    Add comment
                </button>
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
        updateCurrentTask: (task) => dispatch(actions.actions.updateCurrentTask(task)),
        saveCurrentTask: () => dispatch(actions.actions.saveCurrentTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);