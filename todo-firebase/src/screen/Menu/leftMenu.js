import './leftMenu.css';
import { Link } from 'react-router-dom';
import { InboxOutlined, ScheduleOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Collapse, Modal } from "antd";
import { connect } from 'react-redux';
import { useState } from 'react';

import ModalProject from './Modal/project';

import actions from '../../redux/Menu/actions';


function LeftMenu(props) {

    const [isShowModal, setIsShowModal] = useState('');
    const [label, setLabel] = useState({ name: '', description: '' });

    const genExtra = (extraName) => (
        <PlusOutlined
            className="extra-icon"
            onClick={event => {
                event.stopPropagation();
                setIsShowModal(extraName);
            }}
        />
    );

    const onCancelHandle = () => {
        setIsShowModal('');
        setLabel({ name: '', description: '' });

        props.setDefaultProject();

    }

    const onSaveHandle = () => {
        setIsShowModal('');

        switch (isShowModal) {
            case 'projects':
                props.saveCurrentProject();
                break;

            case 'labels':
                props.addLabel(label);
                setLabel({ name: '', description: '' });
                break;

            default: break;
        }
    }

    const modalContent = () => {

        switch (isShowModal) {
            case 'projects':
                return <ModalProject/>
            case 'labels':
                return (
                    <div>
                        <div className="form-item">
                            <p>Name:</p>
                            <input type="text" value={label.name} onChange={(e) => setLabel({ ...label, name: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <p>Description:</p>
                            <input type="text" value={label.description} onChange={(e) => setLabel({ ...label, description: e.target.value })} />
                        </div>
                    </div>
                )
            default:
                return <div></div>
        }
    }

    return (
        <div className={props.show_menu ? "menu-wrapper" : "menu-wrapper hiddenn"}>
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
            <Collapse bordered={false}>
                <Collapse.Panel header="Projects" key="projects" extra={genExtra('projects')}>
                    <div className="option-left-menu" style={{ fontWeight: 'normal' }}>
                        <Link to='/app/projects'>ABC</Link>
                    </div>
                </Collapse.Panel>
                <Collapse.Panel header="Labels" key="labels" extra={genExtra('labels')}>
                    <div className="option-left-menu" style={{ fontWeight: 'normal' }}>
                        abc
                    </div>
                </Collapse.Panel>
                <Collapse.Panel header="Filters" key="filters" extra={genExtra('filters')}>
                    <div className="option-left-menu" style={{ fontWeight: 'normal' }}>
                        abc
                    </div>
                </Collapse.Panel>
            </Collapse>

            <Modal
                title={'Add ' + isShowModal}
                visible={isShowModal ? true : false}
                width={650}
                style={{ top: 30 }}
                onCancel={onCancelHandle}
                footer={
                    <>
                        <Button type="default" onClick={onCancelHandle}>Cancel</Button>
                        <Button type="primary" onClick={onSaveHandle}>Save</Button>
                    </>
                }
            >
                {
                    modalContent()
                }
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        show_menu: state.menuReducer.show_menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentProject: () => dispatch(actions.actions.saveCurrentProject()),
        setDefaultProject: () => dispatch(actions.actions.setDefaultProject())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);