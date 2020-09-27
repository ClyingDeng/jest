
 import Counter from './src/7.conter'

 let counter;
 describe('作用域', () => {
     beforeEach(() => {  // 每个用例执行前 都会执行此方法
         counter = new Counter();
         console.log('before each');
     })
     afterEach(()=>{
         console.log('after each');
     })
     beforeAll(() => {  // 只走一次
         console.log('beforeAll');
     })
     afterAll(()=>{
         console.log('afterAll');
     })
      it('测试类的加法',() =>{
          counter.add(5);
          expect(counter.counter).toBe(5);
      })
 })

 it('测试类的减法',() =>{
    counter = new Counter();
    counter.minus(5);
    expect(counter.counter).toBe(-5);
})
 it('测试类的加减法',() =>{
    counter = new Counter();
    counter.add(5);
    counter.minus(5);
    expect(counter.counter).toBe(0);
})