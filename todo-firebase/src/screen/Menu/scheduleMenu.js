import './schedule.css';
import moment from 'moment';
import { DatePicker } from 'antd';
import { useState } from 'react';


export const ScheduleMenu = (props) => {

    const [date, setDate] = useState('');

    const handleKeyPress = (e) => {
        console.log('');
        // if(e.key === 'Enter') {
        //     let d = moment(date, "DD MMM YYYY").isValid();

        //     d ? console.log( moment(date, "DD MMM YYYY").toDate()) : console.log(d);
        // }
    }

    return (
        <div className={props.child ? 'schedule-wrapper' : 'hidden'}>
            <div className="schedule-content">
                <div className="schedule-input">
                    <input type="text" placeholder="type a due date" value={date} onChange={(e) => setDate(e.target.value)} onKeyPress={handleKeyPress}/>
                </div>
                <div className="schedule-options">
                    <div className="schedule-options-item">

                        <div className="schedule-options-item-icon"><i className="fa fa-calendar-check-o" style={{ color: 'green' }}></i></div>
                        <div className="schedule-options-item-label">Today</div>


                        <div className="schedule-options-item-weekday">{moment().format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item">

                        <div className="schedule-options-item-icon"><i className="fas fa-sun" style={{ color: '#ad6200' }}></i></div>
                        <div className="schedule-options-item-label">Tomorrow</div>

                        <div className="schedule-options-item-weekday">{moment().add(1, 'day').format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item">

                        <div className="schedule-options-item-icon"><i className="fas fa-couch" style={{ color: '#246fe0' }}></i></div>
                        <div className="schedule-options-item-label">Weekend</div>

                        <div className="schedule-options-item-weekday">{moment().day(6).format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item">

                        <div className="schedule-options-item-icon"><i className="fas fa-long-arrow-alt-right" style={{ color: 'purple' }}></i></div>
                        <div className="schedule-options-item-label">Next week</div>

                        <div className="schedule-options-item-weekday">{moment().add(1, 'week').day(1).format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item">

                        <div className="schedule-options-item-icon"><i className="far fa-calendar-times"></i></div>
                        <div className="schedule-options-item-label">No date</div>

                        <div className="schedule-options-item-weekday"></div>
                    </div>
                </div>
                <div className="schedule-calender">
                    <DatePicker className='select-date' format={'DD MMM YYYY'} />
                </div>
                <div className="schedule-time">
                    <span>+ Add time</span>
                </div>
            </div>
        </div>
    );
};

export default ScheduleMenu;