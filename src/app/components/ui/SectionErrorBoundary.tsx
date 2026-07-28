import React, { Component, ErrorInfo, ReactNode, startTransition } from 'react';
import { AlertTriangle, RefreshCw, ArrowRight, BookOpen, Home } from 'lucide-react';

interface TabletVariantProps {
  variant: 'tablet';
  onNextSection: () => void;
  onSkipToResume: () => void;
}

interface ResumeVariantProps {
  variant: 'resume';
  onGoHome: () => void;
}

type Props = (TabletVariantProps | ResumeVariantProps) & {
  children: ReactNode;
  sectionKey?: string; // when this changes, reset error state
};

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Section error:', error, errorInfo);
  }

  // Reset when navigating to a different section
  componentDidUpdate(prevProps: Props) {
    if (prevProps.sectionKey !== this.props.sectionKey && this.state.hasError) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  handleRetry = () => {
    startTransition(() => {
      this.setState({ hasError: false, error: undefined });
    });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.variant === 'resume') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#FFB6C1] p-8 max-w-sm w-full text-center">
            <div className="mb-5 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#FFB6C1]/20 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-[#E9518D]" />
              </div>
            </div>
            <h2 className="text-[#E9518D] mb-2">Something went wrong</h2>
            <p className="text-[#E9518D]/70 text-sm mb-6">This page couldn't load. Try again or head back home.</p>

            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-[#E9518D]/60 text-xs mb-1 hover:text-[#E9518D]">
                  Technical details
                </summary>
                <pre className="bg-[#FFF0F5] p-3 rounded-xl text-xs overflow-x-auto max-h-28 text-[#E9518D]/50 whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#E9518D] hover:bg-[#E9518D]/80 text-white rounded-full transition-all hover:scale-105 text-sm"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={this.props.onGoHome}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white border-2 border-[#FFB6C1] hover:border-[#E9518D] text-[#E9518D] rounded-full transition-all hover:scale-105 text-sm"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Tablet variant
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-6 text-center gap-5">
        <div className="w-14 h-14 rounded-full bg-[#FFB6C1]/20 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-[#E9518D]" />
        </div>

        <div>
          <h3 className="text-[#E9518D] mb-1">Section couldn't load</h3>
          <p className="text-[#E9518D]/60 text-sm">
            This section ran into a problem. You can try again or keep exploring.
          </p>
        </div>

        {this.state.error && (
          <details className="text-left w-full max-w-xs">
            <summary className="cursor-pointer text-[#E9518D]/50 text-xs mb-1 hover:text-[#E9518D]">
              Technical details
            </summary>
            <pre className="bg-[#FFF0F5] p-3 rounded-xl text-xs overflow-x-auto max-h-24 text-[#E9518D]/40 whitespace-pre-wrap break-words">
              {this.state.error.toString()}
            </pre>
          </details>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={this.handleRetry}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#E9518D] hover:bg-[#E9518D]/80 text-white rounded-full transition-all hover:scale-105 text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={this.props.onNextSection}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#87CEEB] text-[#4A90B8] hover:border-[#4A90B8] rounded-full transition-all hover:scale-105 text-sm"
          >
            Next Section
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={this.props.onSkipToResume}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#FFB6C1] hover:border-[#E9518D] text-[#E9518D] rounded-full transition-all hover:scale-105 text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Skip to Resume
          </button>
        </div>
      </div>
    );
  }
}
