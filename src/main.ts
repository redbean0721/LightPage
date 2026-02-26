import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router'
import pkg from '../package.json'

// 掛載版本號到全局 window 物件
// eslint-disable-next-line no-undef
;(window as any).APP_VERSION = pkg.version

// 列印版本號
const logVersion = () => {
	const version = pkg.version
	const isPrerelease = /-(beta|alpha|rc|apache|dev)/i.test(version)
	const color = isPrerelease
		? 'color: #ffc107; font-size: 16px; font-weight: bold;'
		: 'color: #42b983; font-size: 16px; font-weight: bold;'
	console.log(`%c LightPage v${version}`, color)
}

logVersion()

createApp(App).use(router).mount('#app')

declare let console: typeof globalThis.console
