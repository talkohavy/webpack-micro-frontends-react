import { openTerminal } from 'open-terminal-programmatically';

/** @type {Array<import('open-terminal-programmatically').OpenTerminalProps>} */
const programs = [
  {
    isEncoded: true,
    config: {
      name: 'host',
      command: 'cd apps/host && pnpm run dev',
      autoFocus: true,
    },
  },
  {
    isEncoded: true,
    config: {
      name: 'mf-home',
      command: 'cd apps/mf-home && pnpm run dev',
    },
  },
  {
    isEncoded: true,
    config: {
      name: 'mf-books',
      command: 'cd apps/mf-books && pnpm run dev',
    },
  },
  {
    isEncoded: true,
    config: {
      name: 'mf-charts',
      command: 'cd apps/mf-charts && pnpm run dev',
    },
  },
];

async function runProgramInDebug() {
  for (const program of programs) {
    if ('command' in program.config) {
      program.config.color = 'blue';
    }

    await openTerminal(program);
  }
}

runProgramInDebug();
