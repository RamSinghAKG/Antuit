import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from './connect/actions';
import * as roleActions from 'components/roles/connect/actions';
import Spinner from '@bit/ram-singh.components.spinner';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import LabelInput from 'components/UI/LabelInput';
import MultiSelect from 'components/UI/MultiSelect';
import * as commonActions from 'common/actions';
import config from 'src/config';
import './users.css';
const User = (props) => {
    const isEdit = props.isEdit;
    const getUsers = props.getUsers;
    const getRoles = props.getRoles;
    const clearError = props.clearError;
    const resetUser = props.resetUser;
    useEffect(() => {
        resetUser();
        getUsers();
        getRoles();
        return () => {
            clearError();
          };
    }, [resetUser, getUsers, getRoles, clearError]);
    
    const create = () => {
        var isDataValid = props.user.userId.length > 0 && props.user.role.length > 0 && props.user.client.length > 0;
        var mailformat =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!props.user.email.match(mailformat)){
            props.setError("enter correct email");
        } else if(!isDataValid){
            props.setError("enter correct user information");
        } else if(isDataValid &&  props.user.email.match(mailformat) ){
            props.createUser(props.user);
            refreshUserInfo();
        } 
    };
    const goBack = () => {
        const { history } = props;
        history.goBack();
    };
    const refreshUserInfo = () => {
        setTimeout(() => {
            props.getUsers();
            props.resetUser();
        }, 100);
    }
    const update = () => {
        var isDataValid = props.user.userId.length > 0 && props.user.role.length > 0 && props.user.client.length > 0;
        isDataValid && props.updateUser(props.user);
        isDataValid && refreshUserInfo();
    };
    const onEdit = (user) => {
        props.setCurrentUser(user);
        props.setEditMode(true);
    };
    const onClientRemove = (client) => {
        let clientList = props.user.client && props.user.client.split(',');
        const filterClientList = clientList.filter(item => item !== client);
        props.setClient(filterClientList.join(','));
    };
    const onClientSelection = (client) => {
        let clientList = props.user.client.length === 0 ? [] : props.user.client.split(',');
        clientList.push(client);
        props.setClient(clientList.join(','));
    };
    const createBtn = isEdit ? <button aria-label="update user" className="action-btn" onClick={() => update()}>Update</button> : <button aria-label="create user" className="action-btn" onClick={() => create()}>Create</button>;
    const isNameDisable = isEdit ? true : false;
    const allClients = config.clientList;
    const allRoles = props.roles.reduce((acc, role) =>  { acc.push(role.name); return acc; }, []);
    // const selectedClientIndex = props.user.client.length > 0 ? allClients.findIndex(client => client === props.user.client) : 0;
    const selectedRolesIndex = props.user.role.length > 0 ? allRoles.findIndex(role => role === props.user.role) : 0;
    const userList = props.users.length === 0 ? <tr><td className="no-border">No Records Found</td></tr> :
        props.users.map((user, index) => {
            return <tr key={index}><td>{user.userId}</td><td>{user.name}</td><td>{user.role}</td><td>{user.client}</td><td><button onClick={() => onEdit(props.users[index])} className="action-btn">Edit</button></td></tr>
        })
    console.log('render users ....');
    return (
        <ErrorBoundary>
            <main>
                <section className="user-container">
                    {props.isLoading ? <Suspense fallback={<div>Loading...</div>}>
                        <Spinner />
                    </Suspense> : null}
                    <LabelInput type="input" isRequired fieldKey="userId" labelName="User ID"  isInputDisable={isNameDisable} value={props.user.userId} placeholder="Enter user id" onChange={props.setUserId}></LabelInput>
                    <LabelInput type="input" fieldKey="name" labelName="Name"  value={props.user.name} placeholder="Enter user name" onChange={props.setName}></LabelInput>
                    <LabelInput type="input" fieldKey="email" labelName="Email"  value={props.user.email} placeholder="Enter user email" onChange={props.setEmail}></LabelInput>
                    <LabelInput type="select" selectedIndex={selectedRolesIndex} isRequired fieldKey="role" options={allRoles} labelName="Role" value={props.user.role} placeholder="Select Role" onChange={(event) => props.setRole(event.target.value)}></LabelInput>
                    {/* <LabelInput type="select" selectedIndex={selectedClientIndex} isRequired fieldKey="client" options={allClients} labelName="Client" value={props.user.client} placeholder="Select client" onChange={(event) => props.setClient(event.target.value)}></LabelInput> */}
                    <MultiSelect labelName="Client" isRequired fieldKey="client" selectedOptions={props.user.client} options={allClients} onChange={onClientSelection} onRemove={onClientRemove}></MultiSelect>
                    <div className="action-btn-container">
                        {createBtn}
                        <button aria-label="go back" className="action-btn" onClick={() => goBack()}>Cancel</button>
                    </div>
                </section>

                <section className="user-list">
                    <h2>User Table</h2>
                    <table>
                        <thead>
                            <tr><th>UserID</th><th>Name</th><th>Role</th><th>Client</th><th>Action</th></tr>
                        </thead>
                        <tbody>{userList}</tbody>
                    </table>
                </section>
            </main>
        </ErrorBoundary>
    );
};
User.propTypes = {
    setName: PropTypes.func,
    setUserId: PropTypes.func,
    setEmail: PropTypes.func,
    setRole: PropTypes.func,
    setClient: PropTypes.func,
    createUser: PropTypes.func,
    updateUser: PropTypes.func,
    getUsers: PropTypes.func,
    setEditMode: PropTypes.func,
    resetUser: PropTypes.func,
    setCurrentUser: PropTypes.func,
    clearError: PropTypes.func,
    setError: PropTypes.func,
    getRoles: PropTypes.func,
    isLoading: PropTypes.bool,
    isEdit:  PropTypes.bool
};
function mapStateToProps(state) {
    return {
        isEdit: state.userReducer.isEdit,
        users: state.userReducer.users,
        user: state.userReducer.user,
        roles: state.roleReducer.roles,
        isLoading: state.commonReducer.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setError: commonActions.setError,
        clearError: commonActions.clearError,
        setCurrentUser: actions.setCurrentUser,
        setEditMode: actions.setEditMode,
        setName: actions.setName,
        setUserId: actions.setUserId,
        setEmail: actions.setEmail,
        setRole: actions.setRole,
        setClient: actions.setClient,
        createUser: actions.createUser,
        resetUser: actions.resetUser,
        updateUser: actions.updateUser,
        getUsers: actions.getUsers,
        getRoles: roleActions.getRoles
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
