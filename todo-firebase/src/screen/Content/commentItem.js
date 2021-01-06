import { Avatar, Button } from 'antd';
import {
    UserOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import actions from '../../redux/content/actions'
import { connect } from 'react-redux';
import { useState } from 'react';

const CommentItem = (props) => {

    const [isEditCmt, setIsEditCmt] = useState(false);
    const [cmtTxt, setCmtTxt] = useState(props.comment.content);

    return (
        <div>
            <div className="item-comment">
                <Avatar size='large' icon={<UserOutlined />} />

                <div className={isEditCmt ? "box-add-task" : "hidden"} style={{ width: '90%', margin: '0px' }}>
                    <div className="box-add-task-content">
                        <div className='add-task-text'>
                            <input type="text" value={cmtTxt} onChange={(e) => setCmtTxt(e.target.value)} />
                        </div>

                    </div>
                    <button className='btn btn-add'>
                        Update
                    </button>
                    <Button type='text' onClick={() => setIsEditCmt(false)}>
                        Cancel
                    </Button>
                </div>

                <div className={isEditCmt ? "hidden" : "item-comment-detail"}>
                    <h4>Someone</h4>
                    <span>{props.comment.createDate}</span>
                    {
                        props.index === 0
                        ?
                        <></>
                        :
                        <div className="actions-comment">
                            <Button className='btn-actions' icon={<EditOutlined />} onClick={() => setIsEditCmt(true)} />
                            <Button className='btn-actions' icon={<DeleteOutlined />} />
                        </div>
                    }
                    <p>{props.comment.content}</p>
                </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
