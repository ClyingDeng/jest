

// 一般如果希望复写某个文件的测试逻辑 我们会选择这种
jest.mock('./src/5.ajax.js');  // 这个文件是假的，找同名文件替换
import { fetchUser, fetchList } from './src/5.ajax'
// 如果真实的文件里的方法也要测试但是mock里面没有  还需要引用真实方法
let {sum} = jest.requireActual('./src/5.ajax')

// mock的文件自动会找 __mocks__
it('测试能否获取用户？', async () => {
    let r = await fetchUser();
    expect(r).toEqual({ name: 'dy' })
})

it('测试能否获取列表', async () => {
    let r = await fetchList();
    expect(r).toEqual(['dy', 'av'])
})

it('求和', () => {
    let data = sum(1,2)
    expect(data).toEqual(3);
})