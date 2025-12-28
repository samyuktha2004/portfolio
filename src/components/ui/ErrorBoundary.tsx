import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#FFB6C1] p-8 md:p-12 max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-[#FFB6C1]/20 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-[#fd6698]" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-[#fd6698] mb-4">Oops! Something went wrong</h1>
            <p className="text-[#fd6698]/70 mb-8">
              Don't worry! This happens sometimes. Let's try refreshing the page.
            </p>

            {/* Error Details (collapsed) */}
            {this.state.error && (
              <details className="mb-8 text-left">
                <summary className="cursor-pointer text-[#fd6698]/70 text-sm mb-2 hover:text-[#fd6698]">
                  Technical details
                </summary>
                <pre className="bg-[#FFF0F5] p-4 rounded-xl text-xs overflow-auto max-h-40 text-[#fd6698]/60">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            {/* Reload Button */}
            <button
              onClick={this.handleReload}
              className="bg-[#FFB6C1] hover:bg-[#fd6698] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
