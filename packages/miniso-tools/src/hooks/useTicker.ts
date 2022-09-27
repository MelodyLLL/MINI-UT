import { useEffect, useRef, useState } from "react";
import testNaN from "@/object/testNaN";
import Ticker from "@/class/Ticker";
// function prefixZero(num, len) {
//   if (String(num).length > len) return num;
//   return (Array(len).join(0) + num).slice(-len);
// }


/**
 * 
 * @param {倒计时结束时间点} expireDate 
 * @param {完成后的回调} onComplete 
 
 * @param {倒计时应该开始时间点,没有的话则直接倒计时} shouldStartTime 
 * @returns {天，时，分, 秒, 是否结束，与shouldStartTime相关}
 */

const useTicker = (expireDate: string, onComplete, shouldStartTime: number) => {
  const countDownDate = new Date(expireDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  const [isStop, setIsStop] = useState(false);
  const [isShouldStart, setIsShouldStart] = useState(false);
  const [ticker, setTicker] = useState<any>(null);

  const taskId = useRef(null);

  useEffect(() => {
    if (testNaN(countDownDate)) {
      throw new Error("countDownDate must be MMMM-DD-YYYY hh:mm:ss");
    }

    // 如果已经是过期时间 直接return
    if (Date.now() > countDownDate) {
      console.log("任务已过期...");
      setIsStop(true);
      return;
    }
    const tickerTemp = Ticker.createTicker();

    setTicker(tickerTemp);

    // 2 传入回调，不需要传间隔时间 默认每秒执行
    taskId.current = ticker?.setIntervalTask(() => {
      const nowTime = Date.now();
      if (nowTime > countDownDate) {
        ticker?.stop();
        setIsStop(true);
        if (typeof onComplete === "function") {
          onComplete();
        }
        return;
      }
      console.log(`任务${taskId.current}运行中...`);
      // 没有前置时间直接开始倒计时
      if (!shouldStartTime) {
        setCountDown(countDownDate - new Date().getTime());
        if (!isShouldStart) {
          setIsShouldStart(true);
        }
      } else {
        // 判断距离多少小时时开始倒计时
        if (shouldStartTime && nowTime > shouldStartTime) {
          setCountDown(countDownDate - new Date().getTime());
          if (!isShouldStart) {
            setIsShouldStart(true);
          }
        }
      }
    });
    ticker?.start();

    return () => {
      ticker?.clearTask(taskId.current);
    };
  }, [countDownDate, shouldStartTime, isShouldStart, onComplete, ticker]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  const result = {
    ticker,
    days,
    hours,
    minutes,
    seconds,
    isStop,
    isShouldStart,
  };
  return result;
};

export default useTicker;
