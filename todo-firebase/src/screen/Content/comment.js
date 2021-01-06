import './content.css';

import actions from '../../redux/content/actions'
import { connect } from 'react-redux';
import { useState } from 'react';
import CommentItem from "./commentItem";

const Comment = (props) => {

    const [cmtValue, setCmtValue] = useState('');

    

    const getDateNow = () => {
        let now = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let date = now.getDate();
        let day = days[now.getDay()];
        let month = months[now.getMonth()];
        let year = now.getFullYear();
        let time = now.getTime();
        let hours = now.getHours();
        let min = now.getMinutes();

        console.log('Date: ', date);
        console.log('Month: ', month);
        console.log('Year: ', year);
        console.log('Day: ', day);
        console.log('Time: ', time);
        console.log('Hours: ', hours);
        console.log('Minutes: ', min);

        return date + ' ' + month + ' ' + year + ' ' + hours + ':' + min;

    }

    const addCommentHandle = () => {


        let newComment = {
            content: cmtValue,
            createDate: getDateNow()
        }
        let comment = [...props.currentTask.comment];
        comment.push(newComment);

        //update curTask
        props.updateCurrentTask({ ...props.currentTask, comment: comment });
        props.saveCurrentTask();
    }


    return (
        <div className="comment-container">
            <div className="view-comment">
                <ul>
                    {
                        //console.log(props.currentTask.comment);
                        props.currentTask.comment.map((comment, index) => <li key={index}><CommentItem comment={comment} index={index}/></li>)
                    }
                </ul>

            </div>
            <div className="add-comment">
                <div className='add-task-text'>
                    <input type="text" placeholder='Add a comment' value={cmtValue} onChange={(e) => setCmtValue(e.target.value)} />
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