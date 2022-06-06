import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { errorHandler } from './error'

const app = createApp(App)
errorHandler(app)

app.mount("#app")

