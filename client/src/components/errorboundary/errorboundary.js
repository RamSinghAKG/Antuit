
import React from 'react';
import 'src/common/common.css';
class ErrorBoundary extends React.Component {
    state = { hasError: false, error: '' };
  
    componentDidCatch(error, info) {
      // for logging 
      console.log('logging error:', error);
      this.setState({ hasError: true, error: error });
    }
  
    render() {
      if (this.state.hasError) {
        return (
        <React.Fragment>
            <div aria-label="error message" className="error-message"> Something went wrong...</div>
        </React.Fragment>);
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;