import { parser, stringify } from './src/1.parse'
// jest mocha chai(断言) sinon
// 断言 describe 就是用例的一个作用域 可以放多个测试用例用来分类
describe('分类1', () => {
    it('1.我希望测试当前parser方法是否ok?', () => {
        expect(1 + 1).toBe(2);
    })
})

describe('分类2', () => {
    it('2.我希望测试当前stringify方法是否ok?', () => {

    })
})
