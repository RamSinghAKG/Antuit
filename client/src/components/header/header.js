import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './header.css';
import 'src/common/common.css';
const Header = (props) => {
    return (
        <ErrorBoundary>
            <nav aria-label="menu items" className="header-container">
                    <Link aria-label="go to home page" className="logo" to="/">Antuit</Link>
            </nav>
            <div aria-label="error message" className="error-message"> {props.error} </div>
        </ErrorBoundary>
    );
};
function mapStateToProps(state) {
    return {
        error: state.commonReducer.error.statusText,
    }
}

Header.propTypes = {
    error: PropTypes.string,
};

export default withRouter(connect(mapStateToProps)(Header));

