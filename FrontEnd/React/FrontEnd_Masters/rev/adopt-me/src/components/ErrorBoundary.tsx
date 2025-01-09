import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Error Boundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            console.log("Error Occured");
            // You can render any custom fallback UI
            return <h2>Something went wrong. Go to <Link to={"/"}>Home</Link></h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;