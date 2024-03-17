import { openTerminal } from 'open-terminal-programmatically';

/** @type {Array<import('open-terminal-programmatically').OpenTerminalProps>} */
const programs = [
  {
    isEncoded: true,
    config: {
      name: 'host',
      command: 'cd apps/host-react && pnpm run dev',
      autoFocus: true,
    },
  },
  {
    isEncoded: true,
    config: {
      name: 'app-01',
      command: 'cd apps/app-01 && pnpm run dev',
    },
  },
  {
    isEncoded: true,
    config: {
      name: 'app-02',
      command: 'cd apps/app-02 && pnpm run dev',
    },
  },
];

async function runProgramInDebug() {
  for (const program of programs) {
    const { config, isDebugMode, ...rest } = program;

    await openTerminal({
      config: isDebugMode ? config : { ...config, color: 'blue' },
      isDebugMode,
      ...rest,
    });
  }
}

runProgramInDebug();
