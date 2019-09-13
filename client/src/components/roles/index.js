import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from './connect/actions';
import Spinner from '@bit/ram-singh.components.spinner';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import LabelInput from 'components/UI/LabelInput';
import * as commonActions from 'common/actions';
import './roles.scss';
const Role = (props) => {
    const isEdit = props.isEdit;
    const getRoles = props.getRoles;
    const getPermissions = props.getPermissions;
    const resetRole = props.resetRole;
    const clearError = props.clearError;
    useEffect(() => {
        getRoles();
        getPermissions();
        resetRole();
        return () => {
            clearError();
        }
    }, [getRoles, getPermissions, resetRole, clearError]);
    
    const create = () => {
        const isDataValid = props.role.name.length > 0 && props.role.permission.length > 0;
        !isDataValid && props.setError("Enter role name");
        isDataValid && props.createRole(props.role);
        isDataValid && refreshRoleInfo();
    };
    const goBack = () => {
        const { history } = props;
        history.goBack();
    };
    const refreshRoleInfo = () => {
        setTimeout(() => {
            props.getRoles();
            props.resetRole();
        }, 100);
    };
    const update = () => {
        const isDataValid = props.role.name.length > 0 && props.role.permission.length > 0;
        isDataValid && props.updateRole(props.role);
        isDataValid && refreshRoleInfo();
    };
    const onEdit = (role) => {
        props.setCurrentRole(role);
        props.setRoleEditMode(true);
    };
    const createBtn = isEdit ? <button aria-label="update role" className="action-btn" onClick={() => update()}>Update</button> : <button aria-label="create role" className="action-btn" onClick={() => create()}>Create</button>;
    const isNameDisable = isEdit ? true : false;
    const allPermissions = props.permissions.reduce((acc, permission) =>  { acc.push(permission.name); return acc; }, []);
    const selectedPermissionIndex = props.role.permission.length > 0 ? allPermissions.findIndex(permission => permission === props.role.permission) : 0;
    const roleList = props.roles.length === 0 ? <tr><td className="no-border">No Records Found</td></tr> :
        props.roles.map((role, index) => {
            return <tr key={index}><td>{role.name}</td><td>{role.permission}</td><td><button onClick={() => onEdit(props.roles[index])} className="action-btn">Edit</button></td></tr>
        })
    return (
        <ErrorBoundary>
            <main>
                <section className="role-container">
                    {props.isLoading ? <Suspense fallback={<div>Loading...</div>}>
                        <Spinner />
                    </Suspense> : null}
                    <LabelInput type="input" isInputDisable={isNameDisable} fieldKey="name" isRequired labelName="Name"  value={props.role.name} placeholder="Enter role name" onChange={props.setName}></LabelInput>
                    <LabelInput type="select" selectedIndex={selectedPermissionIndex} isRequired fieldKey="permission" options={allPermissions} labelName="Permission" value={props.role.permission} placeholder="Select Permission" onChange={(event) => props.setPermission(event.target.value)}></LabelInput>
                    
                    <div className="action-btn-container">
                        {createBtn}
                        <button aria-label="go back" className="action-btn" onClick={() => goBack()}>Cancel</button>
                    </div>
                </section>

                <section className="role-list">
                    <h2>Role Table</h2>
                    <table>
                        <thead>
                            <tr><th>Name</th><th>Permission</th><th></th></tr>
                        </thead>
                        <tbody>{roleList}</tbody>
                    </table>
                </section>
            </main>
        </ErrorBoundary>
    );
};
Role.propTypes = {
    getPermissions: PropTypes.func,
    setPermission: PropTypes.func,
    setName: PropTypes.func,
    createRole: PropTypes.func,
    updateRole: PropTypes.func,
    getRoles: PropTypes.func,
    setRoleEditMode: PropTypes.func,
    resetRole: PropTypes.func,
    setCurrentRole: PropTypes.func,
    setError: PropTypes.func,
    clearError: PropTypes.func,
    isLoading: PropTypes.bool,
    isEdit:  PropTypes.bool
};
function mapStateToProps(state) {
    return {
        role: state.roleReducer.role,
        roles: state.roleReducer.roles,
        permissions: state.roleReducer.permissions,
        isEdit: state.roleReducer.isEdit,
        isLoading: state.commonReducer.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setError: commonActions.setError,
        clearError: commonActions.clearError,
        getPermissions: actions.getPermissions,
        setRoleEditMode: actions.setRoleEditMode,
        setPermission: actions.setPermission,
        setName: actions.setName,
        createRole: actions.createRole,
        resetRole: actions.resetRole,
        updateRole: actions.updateRole,
        getRoles: actions.getRoles,
        setCurrentRole: actions.setCurrentRole
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Role));
