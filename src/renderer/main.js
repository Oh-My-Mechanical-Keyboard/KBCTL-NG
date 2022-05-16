import Vue from 'vue'
import axios from 'axios'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  fallbackLocale: "zh",//没有英文的时候默认 中文语言
  silentTranslationWarn: true,//报错时加上这个参数可以取消警告
  messages: {
    'zh': require('#/VueI18n/language-zh'),
    'en': require('#/VueI18n/language-en')
  }
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
