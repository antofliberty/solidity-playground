/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import {web3Service} from "./services/web3-service";

const app = createApp(App)

app.config.globalProperties.$web3Service = web3Service;


registerPlugins(app)

app.mount('#app')
