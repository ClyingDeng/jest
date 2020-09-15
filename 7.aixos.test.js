

import { fetchUser, fetchList } from './src/5.ajax'

// 在根目录下建立一个__mocks__文件夹 来mock掉第三方模块，文件名与包名相同

it('测试能否获取用户？', async () => {
    let r = await fetchUser();
    expect(r).toEqual({ name: 'dy' })
})
