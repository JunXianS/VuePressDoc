import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import docButton from './components/docButton/docButton'
import docEcharts from './components/docEcharts/docEcharts'
import updateLog from './components/updateLog'

const components = [
    docButton,docEcharts,updateLog
  ]

Vue.use(ElementUI);

const shotDoc = { 
    install(Vue, options) {
      Object.values(components).forEach((component) => {
        Vue.component(component.name, component)
      })
    },
  }
  
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(shotDoc)
  }
  
  export default shotDoc