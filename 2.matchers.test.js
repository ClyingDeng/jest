// 匹配分为三类
// 相等 不相等 是否包含


// 匹配器 不同的写法 会有相同的功能
// 中文
it('相等用例', () => {
    expect(1 + 1).toBe(2);
    expect({ name: 'zf' }).toEqual({ name: 'zf' });
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
})

it('不相等关系', () => {
    expect(1 + 1).not.toBe(1);// 取反操作
    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeGreaterThan(1);
})

it('判断是否包含', ()=>{
    expect('hello').toContain('h');
    expect('hello').toMatch(/h/);
})
