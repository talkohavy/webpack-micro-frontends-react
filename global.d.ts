declare global {
  interface Element {
    content: any;
  }
  interface Window {
    MY_INITIAL_STATE: any;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }
}

export {};
