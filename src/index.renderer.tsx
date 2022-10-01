import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import Router from './index.router'
import PageHome from './pages/Home'

import './styles/global'
import HomeContent from './pages/HomeContent'
import VideoContent from './pages/VideoContent'

createApp(<PageHome />).use(createPinia()).use(Router).mount('#PageHome')
createApp(<App />).use(createPinia()).use(Router).mount('#app')
createApp(<HomeContent />).use(createPinia()).use(Router).mount('.HomeContent')
createApp(<VideoContent />).use(createPinia()).use(Router).mount('.VideoContent')
