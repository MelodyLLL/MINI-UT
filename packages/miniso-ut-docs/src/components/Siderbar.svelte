<div class="siderBar">
  <div class="tab">
    <div class="tab_inner flex">
      <div>工具库</div>
      <div>UI库</div>
      <div>关于</div>
    </div>
  </div>
  <div class="inner" >
  </div>
</div>

<style lang="scss">
  .siderBar {
    top: 40px;
    left: 0;
    bottom: 0;
    background-color: aquamarine;
    // width: 320px;
    color: #fff;
    height: calc(100vh - 40px);
    background-color: #24272e;
    .tab {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;

      .tab_inner > * {
        word-break: keep-all;
        box-sizing: border-box;
        flex: 1;
        text-align: center;
        padding: 2px 12px;
      }
    }
    .inner {
      // height: 100%;
      overflow-y: auto;
    }
  }
</style>
