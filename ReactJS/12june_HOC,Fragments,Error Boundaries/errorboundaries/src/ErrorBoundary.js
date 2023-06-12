import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,

        })
        // You can also log error messages to an error reporting service here
    }
    render() {
        if (this.state.error) {
            // Error path
            return (
                <>
                    <h2>Something went wrong.</h2>
                    <a href="http://localhost:3000">Go Back </a>
                </>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
export default ErrorBoundary;