import { getDataCallback, getDataPromise } from './src/3.async'

// 1. 只要测试的代码有一部逻辑，默认不支持异步
it('测试回调用例的方式', (done) => {
    getDataCallback((data) => {
        expect(data).toEqual({ name: 'zf' });
        done();
    })
});

it('测试当前Promise执行的预期', async () => {
    let data = await getDataPromise();
    expect(data).toEqual({name:'zf'})
})

// 异步的函数测试的时候， 可以传入done 方法 或者 返回promise