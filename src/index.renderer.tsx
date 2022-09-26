import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import Router from './index.router'
import PageHome from './pages/Home'

import './styles/global'

createApp(<PageHome />).use(createPinia()).use(Router).mount('#PageHome')
createApp(<App />).use(createPinia()).use(Router).mount('#app')
