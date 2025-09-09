import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-6 text-center'>
          <h1 className='text-xl font-bold text-red-600 mb-4'>Something went wrong!</h1>
          <p className='text-gray-600 mb-4'>Please refresh the page or try again.</p>
          <button 
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
