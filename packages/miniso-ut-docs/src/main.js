import App from './App.svelte'
import 'highlight.js/styles/atom-one-light.css'
const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
