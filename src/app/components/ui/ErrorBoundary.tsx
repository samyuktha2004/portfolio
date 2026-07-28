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
        <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30 flex items-center justify-center p-4 overflow-hidden">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#FFB6C1] p-6 md:p-8 lg:p-12 max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFB6C1]/20 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-[#E9518D]" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-[#E9518D] mb-3 md:mb-4 break-words">Oops! Something went wrong</h1>
            <p className="text-[#E9518D]/70 mb-6 md:mb-8 break-words">
              Don't worry! This happens sometimes. Let's try refreshing the page.
            </p>

            {/* Error Details (collapsed) */}
            {this.state.error && (
              <details className="mb-6 md:mb-8 text-left">
                <summary className="cursor-pointer text-[#E9518D]/70 text-sm mb-2 hover:text-[#fd6698]">
                  Technical details
                </summary>
                <pre className="bg-[#FFF0F5] p-3 md:p-4 rounded-xl text-xs overflow-x-auto overflow-y-auto max-h-32 md:max-h-40 text-[#E9518D]/60 whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            {/* Reload Button */}
            <button
              onClick={this.handleReload}
              className="bg-[#E9518D] hover:bg-[#E9518D]/80 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 mx-auto text-sm md:text-base"
            >
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
              <span className="whitespace-nowrap">Refresh Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}