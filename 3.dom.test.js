import { removeNode } from './src/2.dom'

// jest 具备 jsdom 功能 jsdom 环境 可以有 dom 概念
it('能否正常删除dom节点？', () => {
    document.body.innerHTML = `<div><button id="btn"></button></div>`;
    let btn = document.querySelector('#btn');
    expect(btn).not.toBeNull(); //按钮是否不为空
    removeNode(btn);
    btn = document.querySelector('#btn');
    expect(btn).toBeNull(); // 按钮是否被删除掉
})

// 只执行某个用例
// it.only('xxx', () => {

// })

// 测试选项卡 开关

// f 强制刷新没通过的用例
// o 表示根据git 历史来判断运行哪个测试
// enter 默认全部重新执行
// 一般都配合git历史 

