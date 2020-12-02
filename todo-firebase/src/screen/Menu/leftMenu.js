import './leftMenu.css';
import { Link } from 'react-router-dom';
import { InboxOutlined, ScheduleOutlined, CalendarOutlined } from '@ant-design/icons'
import {connect} from 'react-redux';

function LeftMenu(props) {

    console.log(props.show_menu);

    return (
        <div className={ props.show_menu ? "menu-wrapper" : "menu-wrapper hiddenn"}>
            <ul className="left-menu">
                <li>
                    <Link to='/app/inbox'>
                        <div className="items">
                            <InboxOutlined style={{ fontSize: '17px', color: '#246fe0', marginRight: '10px' }} />
                            <span>Inbox</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/app/today'>
                        <div className="items">
                            <ScheduleOutlined style={{ fontSize: '17px', color: '#058527', marginRight: '10px' }} />
                            <span>Today</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/app/upcoming'>
                        <div className="items">
                            <CalendarOutlined style={{ fontSize: '17px', color: '#692fc2', marginRight: '10px' }} />
                            <span>Upcoming</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        show_menu: state.menuReducer.show_menu
    }
}


export default connect(mapStateToProps, null)(LeftMenu);