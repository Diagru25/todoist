import './app.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import TopBar from './header/topBar';
import LeftMenu from './Menu/leftMenu';
import Inbox from './Content/inbox';
import Today from './Content/today';
import Upcoming from './Content/upcoming';

import {connect} from 'react-redux';
import actions from '../redux/Menu/actions';

function MainApp(props) {
    return (
        <Router>
            <div>
                <TopBar></TopBar>
                <LeftMenu></LeftMenu>

                <div className={props.show_menu ? "main-container" : "main-container left-menu-hide"} 
                    onClick={() => props.toggle_menu_setting(false)}>
                    <Switch>
                        <Route exact path='/' component={Inbox} />
                        <Route exact path='/app/inbox' component={Inbox} />
                        <Route exact path='/app/today' component={Today} />
                        <Route exact path='/app/upcoming' component={Upcoming} />
                    </Switch>
                </div>
                <div className="test"></div>
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        show_menu: state.menuReducer.show_menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle_menu_setting: (isBtn) => dispatch(actions.actions.menuSettingToggle(isBtn))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainApp);