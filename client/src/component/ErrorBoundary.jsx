import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-6 text-center'>
          <h1 className='text-xl font-bold text-red-600 mb-4'>
            Something went wrong!
          </h1>
          <p className='text-gray-600 mb-4'>
            Please refresh the page or try again.
          </p>

          {/* In thêm lỗi cụ thể */}
          <pre className="bg-gray-100 text-left text-red-600 text-sm p-4 rounded mb-4 overflow-x-auto whitespace-pre-wrap">
            {this.state.error?.toString()}
            {"\n"}
            {this.state.errorInfo?.componentStack}
          </pre>

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
