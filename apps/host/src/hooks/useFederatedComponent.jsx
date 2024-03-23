import { lazy, useEffect, useState } from 'react';
import { init } from '@module-federation/runtime/.';
import { loadComponent } from '../components/MicroFrontend/loadComponent';
import { useDynamicScriptLoader } from '../components/MicroFrontend/useDynamicScriptLoader';

const componentCache = new Map();

/**
 * @param {{
 *   remoteEntryUrl: string,
 *   scope: string,
 *   module: string
 * }} [props]
 */
export function useFederatedComponent(props) {
  const { remoteEntryUrl, scope, module } = props ?? {};

  /** @type {any} */
  const [Component, setComponent] = useState(null);

  const { isLoadingScript, isScriptReady, scriptLoadingError } = useDynamicScriptLoader({ remoteEntryUrl });

  useEffect(() => {
    // Only recalculate when key changes
    if (Component) setComponent(null);
    // eslint-disable-next-line
  }, [remoteEntryUrl, scope, module]);

  useEffect(() => {
    if (Component) return;

    if (!(remoteEntryUrl && scope && module)) return;

    const cacheKey = `${remoteEntryUrl}-${scope}-${module}`;
    const cachedComponent = componentCache.get(cacheKey);
    if (cachedComponent) return setComponent(cachedComponent);

    if (isScriptReady) {
      init({ name: 'default', remotes: [{ name: scope, entry: remoteEntryUrl }] });
      const Comp = lazy(loadComponent({ scope, module }));
      componentCache.set(cacheKey, Comp);
      setComponent(Comp);
    }
    // eslint-disable-next-line
  }, [Component, isScriptReady, remoteEntryUrl, scope, module]);

  return { isLoadingScript, Component, scriptLoadingError };
}
