import { Suspense } from 'react';
import { useFederatedComponent } from '../../hooks/useFederatedComponent';

/**
 * @param {{
 *   remoteEntryUrl: string,
 *   scope: string,
 *   module: string,
 *   fallbackComponent?: import('react').ReactNode,
 * }} props
 */
export default function MicroFrontend({ remoteEntryUrl, scope, module, fallbackComponent, ...componentPropsRest }) {
  const {
    isLoadingScript,
    Component: FederatedComponent,
    scriptLoadingError,
  } = useFederatedComponent({ remoteEntryUrl, scope, module });

  return (
    // Hint! The Suspense fallbackComponent is rendered between the time the script is ready and until the Component is lazy loaded.
    <Suspense fallback={fallbackComponent ?? <div>lazy loading the component...</div>}>
      {isLoadingScript && <div>loading the script...</div>}
      {scriptLoadingError && <div>error loading the script!!!</div>}
      {FederatedComponent && <FederatedComponent {...componentPropsRest} />}
    </Suspense>
  );
}
