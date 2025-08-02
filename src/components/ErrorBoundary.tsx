"use client";

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center max-w-md mx-auto px-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold gradient-text mb-4">Something went wrong</h2>
              <p className="text-foreground/70 mb-6">
                We encountered an error while loading the portfolio. Please refresh the page to try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
