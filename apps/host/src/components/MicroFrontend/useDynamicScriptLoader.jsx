import { useEffect, useState } from 'react';

const urlCache = new Set();

export function useDynamicScriptLoader({ remoteEntryUrl }) {
  const [isLoadingScript, setIsLoadingScript] = useState(false);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [scriptLoadingError, setScriptLoadingError] = useState(false);

  useEffect(() => {
    if (!remoteEntryUrl) return;

    if (urlCache.has(remoteEntryUrl)) {
      setIsScriptReady(true);
      return void setScriptLoadingError(false);
    }

    setIsLoadingScript(true);
    setIsScriptReady(false);
    setScriptLoadingError(false);

    const scriptElement = document.createElement('script');

    scriptElement.src = remoteEntryUrl;
    scriptElement.type = 'text/javascript';
    scriptElement.async = true;

    scriptElement.onload = () => {
      urlCache.add(remoteEntryUrl);
      setIsScriptReady(true);
      setIsLoadingScript(false);
    };

    scriptElement.onerror = () => {
      setIsScriptReady(false);
      setIsLoadingScript(false);
      setScriptLoadingError(true);
    };

    document.head.appendChild(scriptElement);

    return () => {
      urlCache.delete(remoteEntryUrl);
      document.head.removeChild(scriptElement);
    };
  }, [remoteEntryUrl]);

  return { isLoadingScript, isScriptReady, scriptLoadingError };
}
