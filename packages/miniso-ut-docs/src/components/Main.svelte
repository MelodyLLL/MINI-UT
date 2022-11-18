<script>
  import Footer from './Footer.svelte'
  import Docs from './Docs.svelte'
</script>

<main>
  <div class="main_wrapper">
    <div class="docs_wrapper"><Docs /></div>
    <Footer />
  </div>
  <div class="demo-frame">
    <iframe title="h5" src="http://0.0.0.0:10086/#/pages/basic/button/index" />
    <div class="iphone-frame" />
  </div>
</main>

<style lang="scss">
  main {
    /* background: #f0f0f0; */
    display: flex;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    height: calc(100vh - 40px);
    overflow: auto;
    .main_wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>
