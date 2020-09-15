
// 测试过多少秒 结果怎么样
export const timer = (fn) =>{
    setTimeout(()=>{
        fn({name:'zf'})
    },5000)
}
export const timer2 = (fn) =>{
    setInterval(()=>{
        fn({name:'zf'})
    },5000)
}