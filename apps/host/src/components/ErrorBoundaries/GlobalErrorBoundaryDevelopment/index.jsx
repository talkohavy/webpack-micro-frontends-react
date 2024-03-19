import ErrorBoundaryBase from '../ErrorBoundaryBase';
import ErrorStackTraceModalDevelopment from './ErrorStackTraceModalDevelopment';

/**
 * @param {{
 *   children?: any
 * }} props
 */
export default function GlobalErrorBoundaryDevelopment({ children }) {
  return (
    <ErrorBoundaryBase isDevelopmentOnly fallback={ErrorStackTraceModalDevelopment}>
      {children}
    </ErrorBoundaryBase>
  );
}
