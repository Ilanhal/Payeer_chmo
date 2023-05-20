import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'shared/assets/styles/main.scss'

const app = createApp({
  render: () => h(App),
})

function createErrorHandler (): any {
  try {
    app.config.errorHandler = () => {
      void router.push('/')
    }
  } catch (error: any) {
    void router.push('/server-error')
    return error
  }
}

createErrorHandler()

axios.defaults.baseURL = ''

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(CKEditor)

app.mount('#app')
