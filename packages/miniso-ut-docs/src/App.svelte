<script>
  import Header from './components/Header.svelte'
  import Main from './components/Main.svelte'
  import Siderbar from './components/Siderbar.svelte'
  // export let name
</script>

<div class="wrapper">
  <Header />
  <div class="content">
    <Main />
    <Siderbar />
  </div>
</div>

<style lang="scss" global>
  @import './style/global.scss';
  @import './style/markdown.scss';
  @import './style/tint.scss';
  @import './style/normalize.scss';
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .wrapper .content {
    display: flex;
  }
</style>
