// 实现一个数组的map方法

export const map = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        fn(element, i)
    }
}