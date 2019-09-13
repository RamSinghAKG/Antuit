import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './home.scss';
const Home = () => {
  return (
    <ErrorBoundary>
      <main className="action-container">
        <Link className="action-link" aria-label="go to Users page"  to="/user">Create/Update Users</Link>
        <Link className="action-link" aria-label="go to Roles page"  to="/role">Create/Update Roles</Link>
      </main>
    </ErrorBoundary>
  );
}
Home.propTypes = { };


export default Home;

