
import moment from 'moment';
//import { DatePicker, Calendar } from 'antd';
import { useState } from 'react';
import actions from '../../redux/content/actions';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './schedule.css';
export const ScheduleMenu = (props) => {

    const [date, setDate] = useState(props.currentTask.schedule);

    const handleKeyPress = (e) => {
        console.log('');
        // if(e.key === 'Enter') {
        //     let d = moment(date, "DD MMM YYYY").isValid();

        //     d ? console.log( moment(date, "DD MMM YYYY").toDate()) : console.log(d);
        // }
    }

    const handleClickOptions = (schedule) => {
        props.updateCurrentTask({ ...props.currentTask, schedule: schedule });
        setDate(schedule);
        //props.parentCallBack(false);
    }

    const onChangeDate = (value) => {
        let dateString = moment(value).isValid() ? moment(value).format("DD MMM YYYY") : '';
        setDate(dateString);
    }

    return (
        <div className={props.child ? 'schedule-wrapper' : 'hidden'}>
            <div className="schedule-content">
                <div className="schedule-input">
                    <input type="text" placeholder="type a due date" value={date} onKeyPress={handleKeyPress} readOnly/>
                </div>
                <div className="schedule-options">
                    <div className="schedule-options-item" onClick={() => handleClickOptions(moment().format("DD MMM YYYY"))}>

                        <div className="schedule-options-item-icon"><i className="fa fa-calendar-check-o" style={{ color: 'green' }}></i></div>
                        <div className="schedule-options-item-label">Today</div>


                        <div className="schedule-options-item-weekday">{moment().format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item" onClick={() => handleClickOptions(moment().add(1, 'day').format("DD MMM YYYY"))}>

                        <div className="schedule-options-item-icon"><i className="fas fa-sun" style={{ color: '#ad6200' }}></i></div>
                        <div className="schedule-options-item-label">Tomorrow</div>

                        <div className="schedule-options-item-weekday">{moment().add(1, 'day').format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item" onClick={() => handleClickOptions(moment().day(6).format("DD MMM YYYY"))}>

                        <div className="schedule-options-item-icon"><i className="fas fa-couch" style={{ color: '#246fe0' }}></i></div>
                        <div className="schedule-options-item-label">Weekend</div>

                        <div className="schedule-options-item-weekday">{moment().day(6).format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item" onClick={() => handleClickOptions(moment().add(1, 'week').day(1).format("DD MMM YYYY"))}>

                        <div className="schedule-options-item-icon"><i className="fas fa-long-arrow-alt-right" style={{ color: 'purple' }}></i></div>
                        <div className="schedule-options-item-label">Next week</div>

                        <div className="schedule-options-item-weekday">{moment().add(1, 'week').day(1).format("ddd")}</div>
                    </div>
                    <div className="schedule-options-item" onClick={() => handleClickOptions('')}>

                        <div className="schedule-options-item-icon"><i className="far fa-calendar-times"></i></div>
                        <div className="schedule-options-item-label">No date</div>

                        <div className="schedule-options-item-weekday"></div>
                    </div>
                </div>
                <div className="schedule-calender">
                    {/* <DatePicker className='select-date' format={'DD MMM YYYY'} onChange={onChangeDate}/> */}
                    <Calendar onChange={onChangeDate} value={date !== '' ? moment(date, "DD MMM YYYY").toDate() : moment().toDate()}/>
                </div>
                <div className="schedule-time">
                    <span>+ Add time</span>
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
        updateCurrentTask: (task) => dispatch(actions.actions.updateCurrentTask(task))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleMenu);