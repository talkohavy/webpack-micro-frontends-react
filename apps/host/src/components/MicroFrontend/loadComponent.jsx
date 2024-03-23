import { loadRemote } from '@module-federation/runtime';

export function loadComponent({ scope, module }) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    const remoteModuleImportPath = `${scope}/${module.slice(2)}`;

    /** @type {any} */
    const Module = await loadRemote(remoteModuleImportPath);

    return Module;
  };
}
