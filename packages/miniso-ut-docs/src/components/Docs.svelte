<script>
  import { onMount } from 'svelte'
  import Demo from '../markdown/demo.md'

  onMount(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(Demo, 'text/html')
    const container = document.getElementById('markdown_container')

    container.appendChild(doc.documentElement.childNodes[1])
  })
</script>

<div id="markdown_container" class="markdown_container_cls"/>
