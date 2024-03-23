import MicroFrontend from '../../../components/MicroFrontend/MicroFrontend';

export default function DynamicRemoteImport() {
  return (
    <div className='flex h-full flex-col gap-6 p-6 dark:text-white'>
      <h1 className='self-center text-3xl font-bold'>Dynamic Import</h1>

      <h2 className='self-center text-xl font-bold'>Loading micro-frontends dynamically</h2>

      <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and <strong>exposes</strong>.
        It will not load components that have been loaded already.
      </p>

      <hr />

      <MicroFrontend remoteEntryUrl='http://localhost:3003/remoteEntry.js' scope='mf_charts' module='./App' />
    </div>
  );
}
