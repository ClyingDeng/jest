import { map } from './src/4.map'

// mock fn
// 测试 前端代码里ajax  更改接口的表现

it('测试map的方法', () => {
    let fn = jest.fn(); // jest帮我们提供的假函数
    map([1, 2, 3], fn);
    expect(fn.mock.calls.length).toBe(3);
    expect(fn.mock.calls[0][0]).toBe(1);
})

// calls 第一次调是0 第二次调是1 。。
//  {"calls": [[1, 0], [2, 1], [3, 2]], 
// instances new 一个函数 
//  "instances": [undefined, undefined, undefined], 
//  "invocationCallOrder": [1, 2, 3], 
// 返回值
//  "results": [{"type": "return", "value": undefined}, {"type": "return", "value": undefined}, {"type": "return", "value": undefined}]}