import './topBar.css';
import {
    MenuOutlined,
    HomeOutlined,
    PlusOutlined,
    BellFilled,
    SettingFilled,
    SettingOutlined,
    SearchOutlined,
    RiseOutlined,
    SyncOutlined,
    DashboardOutlined,
    FundOutlined,
    PrinterOutlined,
    StarTwoTone,
    CreditCardOutlined,
    QuestionCircleOutlined,
    EditOutlined,
    BlockOutlined,
    AlertOutlined,
    LogoutOutlined

} from '@ant-design/icons';

import { Input, Button } from 'antd';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {actions} from '../../redux/Menu/actions';

function TopBar(props) {

    const iconStyle = {
        fontSize: '17px',
        padding: '0px 7px'
    }

    return (
        <header>
            <div className="topBar">
                <div className="topBar-inner">
                    <div className="part part-left">
                        <Button type="text"
                            icon={<MenuOutlined style={iconStyle} />}
                            className='btn-header'
                            onClick={props.toggle_menu}
                        >
                        </Button>
                        <Button type="text"
                            icon={<HomeOutlined style={iconStyle} />}
                            className='btn-header'
                        >
                        </Button>

                        <Input size="small" placeholder="Find" prefix={<SearchOutlined />} className='input-header' />

                    </div>
                    <div className="part part-right">
                        <Button type="text"
                            icon={<PlusOutlined style={iconStyle} />}
                            className='btn-header'
                        >
                        </Button>
                        <Button type="text"
                            icon={<RiseOutlined style={{
                                fontSize: '17px',
                                color: 'white'
                            }} />}
                            className='btn-header'
                        >
                            0/5
                        </Button>


                        <Button type="text"
                            icon={<BellFilled style={iconStyle} />}
                            className='btn-header'
                        >
                        </Button>

                        <Button type="text"
                            icon={<SettingFilled style={iconStyle} />}
                            className='btn-header'
                            onClick={props.toggle_menu_setting}
                        >
                        </Button>
                    </div>
                </div>
            </div>

            <div className={props.show_menu_setting ? 'menu-setting-container' : 'menu-setting-container hidden'}>
                <ul className='menu-setting'>
                    <li>
                        <Link to='/sync'>
                            <div className='select-item'>
                                <SyncOutlined style={iconStyle} />
                                <span>Sync</span>
                            </div>
                        </Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to='/setting'>
                            <div className='select-item'>
                                <SettingOutlined style={iconStyle} />
                                <span>Settings</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Theme'>
                            <div className='select-item'>
                                <DashboardOutlined style={iconStyle} />
                                <span>Theme</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/activity-log'>
                            <div className='select-item'>
                                <FundOutlined style={iconStyle} />
                                <span>Activity log</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/print'>
                            <div className='select-item'>
                                <PrinterOutlined style={iconStyle} />
                                <span>Print</span>
                            </div>
                        </Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to='/Premium'>
                            <div className='select-item'>
                                <StarTwoTone style={iconStyle} />
                                <span>Premium</span>
                            </div>
                            <p className='text-small'>Reminders, Comments and more...</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/business'>
                            <div className='select-item'>
                                <CreditCardOutlined style={iconStyle} />
                                <span>Business</span>
                            </div>
                        </Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to='/Support'>
                            <div className='select-item'>
                                <QuestionCircleOutlined style={iconStyle} />
                                <span>Support</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Templates'>
                            <div className='select-item'>
                                <BlockOutlined style={iconStyle} />
                                <span>Templates</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Blog'>
                            <div className='select-item'>
                                <EditOutlined style={iconStyle} />
                                <span>Blog</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/keyboard'>
                            <div className='select-item'>
                                <BlockOutlined style={iconStyle} />
                                <span>Keyboard shortcut</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/news'>
                            <div className='select-item'>
                                <AlertOutlined style={iconStyle} />
                                <span>What's new</span>
                            </div>
                        </Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to='/login'>
                            <div className='select-item'>
                                <LogoutOutlined style={iconStyle} />
                                <span>Logout</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        show_menu_setting: state.menuReducer.show_setting_menu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggle_menu: () => dispatch(actions.menuToggle()),
        toggle_menu_setting: () => dispatch(actions.menuSettingToggle())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);