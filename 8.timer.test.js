import { timer,timer2 } from './src/6.timer'

jest.useFakeTimers(); // 使用模拟时间

it('测试5秒之后，能否返回调用',()=>{
    let fn = jest.fn();
    timer(fn);
    jest.runAllTimers(); // 默认立即执行
    expect(fn).toHaveBeenCalled();
})
it('测试5秒之后，能否返回调用timer2',()=>{
    let fn = jest.fn();
    timer2(fn);
    jest.advanceTimersByTime(6000);//前进时间
    expect(fn.mock.calls.length).toBe(1);
})