import './leftMenu.css';

import { InboxOutlined, ScheduleOutlined, CalendarOutlined, PlusOutlined, EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Collapse, Modal, Dropdown, Menu } from "antd";

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ModalProject from './Modal/project';
import ModalLabel from './Modal/label';

import actions from '../../redux/Menu/actions';


function LeftMenu(props) {

    const [isShowModal, setIsShowModal] = useState('');


    useEffect(() => {
        props.getAllProject();
        props.getAllLabel();
    }, [])

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
        props.setDefaultProject();
        props.setDefaultLabel();
        setIsShowModal('');
    }

    const onSaveHandle = () => {
        setIsShowModal('');

        switch (isShowModal) {
            case 'projects':
                props.saveCurrentProject();
                break;

            case 'labels':
                props.saveCurrentLabel();
                break;

            default: break;
        }
    }

    const modalContent = () => {

        switch (isShowModal) {
            case 'projects':
                return <ModalProject />
            case 'labels':
                return <ModalLabel />
            default:
                return <div></div>
        }
    }

    const onDeleteHandle = (type, id) => {
        if (type === 'projects')
            props.deleteProject(id);
        else if (type === 'labels')
            props.deleteLabel(id);
        else
            return;
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
                    <div className="option-left-menu">
                        <ul>
                            {
                                props.all_project
                                    ?
                                    props.all_project.map(project =>
                                        <li key={project.key}>
                                            <span>{project.name}</span>
                                            <Dropdown
                                                overlay={
                                                    <Menu>
                                                        <Menu.Item>
                                                            <EditOutlined />
                                                            <span>Rename</span>
                                                        </Menu.Item>
                                                        <Menu.Item onClick={() => onDeleteHandle('projects', project.key)}>
                                                            <DeleteOutlined />
                                                            <span>Delete</span>
                                                        </Menu.Item>
                                                    </Menu>
                                                }
                                                trigger={['click']}>
                                                <Button icon={<MoreOutlined />} />
                                            </Dropdown>
                                        </li>
                                    )
                                    :
                                    <span>You don't have any project</span>
                            }
                        </ul>
                    </div>
                </Collapse.Panel>
                <Collapse.Panel header="Labels" key="labels" extra={genExtra('labels')}>
                    <div className="option-left-menu" style={{ fontWeight: 'normal' }}>
                        <ul>
                            {
                                props.all_label
                                    ?
                                    props.all_label.map(label =>
                                        <li key={label.key}>
                                            <span>{label.name}</span>
                                            <Dropdown
                                                overlay={
                                                    <Menu>
                                                        <Menu.Item>
                                                            <EditOutlined />
                                                            <span>Rename</span>
                                                        </Menu.Item>
                                                        <Menu.Item onClick={() => onDeleteHandle('labels', label.key)}>
                                                            <DeleteOutlined />
                                                            <span>Delete</span>
                                                        </Menu.Item>
                                                    </Menu>
                                                }
                                                trigger={['click']}>
                                                <Button icon={<MoreOutlined />} />
                                            </Dropdown>
                                        </li>
                                    )
                                    :
                                    <span>You don't have any labels</span>
                            }
                        </ul>
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
                width={500}
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
        show_menu: state.menuReducer.show_menu,
        all_project: state.menuReducer.all_project,
        all_label: state.menuReducer.all_label
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentProject: () => dispatch(actions.actions.saveCurrentProject()),
        setDefaultProject: () => dispatch(actions.actions.setDefaultProject()),
        saveCurrentLabel: () => dispatch(actions.actions.saveCurrentLabel()),
        setDefaultLabel: () => dispatch(actions.actions.setDefaultLabel()),

        getAllProject: () => dispatch(actions.actions.getAllProject()),
        getAllLabel: () => dispatch(actions.actions.getAllLabel()),

        deleteProject: (id) => dispatch(actions.actions.deleteProject(id)),
        deleteLabel: (id) => dispatch(actions.actions.deleteLabel(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);