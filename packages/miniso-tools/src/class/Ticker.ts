/**
 * @description 定时器对象
 * @param
 * @returns
 */

class Ticker {
  static instance: any;
  timerId: number;
  animationId: any;
  isRunning: boolean;
  intervalCallbacks: any;

  constructor() {
    // 标识每个方法
    this.timerId = 0;
    // 真实「定时器」ID
    this.animationId = null;
    this.isRunning = false;
    this.intervalCallbacks = Object.create(null);
  }

  start() {
    this.isRunning = true;
    const _this = this;
    function loop() {
      console.log("intervalCallbacks is", _this?.intervalCallbacks);
      _this.excuteAll();
      clearTimeout(_this.animationId);
      // 下一次渲染时执行这个方法
      if (_this.isRunning) {
        _this.animationId = setTimeout(loop, 1000);
      }
    }
    loop();
  }

  setIntervalTask(excute: () => {}) {
    this.timerId++;
    this.intervalCallbacks[this.timerId] = excute;
    return this.timerId;
  }

  // 去遍历所有的方法
  excuteAll() {
    const callBackKeyArr = Object.keys(this?.intervalCallbacks);
    if (callBackKeyArr.length === 0) {
      console.log("intervalCallbacks is empty...");
      this.stop();
      this.clearAllTask();
    }
    callBackKeyArr?.forEach((timerId) => {
      const callback = this.intervalCallbacks[timerId];
      try {
        if (typeof callback === "function") {
          callback();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  stop() {
    this.isRunning = false;
    clearTimeout(this.animationId);
  }

  resume() {
    this.start();
  }

  clearTask(taskId: any) {
    delete this.intervalCallbacks[taskId];
  }

  clearAllTask() {
    this.intervalCallbacks = Object.create(null);
  }

  static createTicker() {
    // 单实例
    if (!this.instance) {
      this.instance = new Ticker();
    }
    // this.instance.start()
    return this.instance;
  }
}

export default Ticker;
