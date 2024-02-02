/* eslint-disable import/no-unresolved */
// @ts-nocheck
import { createApp } from 'vue';
import Info from './components/info.vue';

const el = document.getElementById('dev-vue');

const app = createApp(Info);
app.mount(el);
