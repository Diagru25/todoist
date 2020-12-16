import './content.css';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Comment = (props) => {
    
    const showDate = () => {
        let now = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

    }

    return (
        <div className="comment-container">
            <div className="view-comment">
                <ul>
 
                    <li key='1'>
                        <div className="item-comment">
                            <Avatar size='large' icon={<UserOutlined/>}/>
                            <div className="item-comment-detail">
                                <h1>Someone</h1>
                                <span>date</span>
                                <p>Content</p>
                            </div>
                        </div>
                    </li>
                
                </ul>
                
            </div>
            <div className="add-comment">
                <div className='add-task-text'>
                    <input type="text" placeholder='Add a comment' />
                </div>
                <hr />
                <button className='btn btn-add'>
                    Add comment
                </button>
            </div>
        </div>
    );
};

export default Comment;