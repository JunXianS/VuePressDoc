
import VueHighlightJS from 'vue-highlight.js';
 
import 'highlight.js/styles/atom-one-light.css';
 
import DocCom from '../../src/index'

export default ({
  Vue,  
  options,  
  router, 
  siteData  
}) => {
  
  Vue.use(VueHighlightJS) 
  Vue.use(DocCom)
}