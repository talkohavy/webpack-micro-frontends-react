/* eslint-disable import/no-unresolved */
// @ts-nocheck
import { createApp } from 'vue';
import Info from './components/info.vue';

const standaloneHookElement = document.getElementById('child-vue');

function mountChild(element) {
  const app = createApp(Info);
  app.mount(element);
}

// If you're running this child on its own, it has an html on which this app can be mounted!
if (standaloneHookElement) {
  mountChild(standaloneHookElement);
}

export { mountChild };
