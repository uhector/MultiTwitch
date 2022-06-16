import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import router from './router'

const app = createApp(App)

// Components
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)

// Globals
app.provide('githubURL', 'https://github.com/ulacioh/multwitch')
app.provide('twitchParent', window.location.host)

// Plugins
app.use(router)

app.mount('#app')
