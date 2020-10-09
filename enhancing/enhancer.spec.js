const enhancer = require('./enhancer.js');
const { repair } = './enhancer.js'
const { success } = './enhancer.js'
// test away!

const item  = {
    name: 'sword',
    durability: 40,
    enhancement: 15,
  }
  
describe( 'repair items', () => {
    it('should check value of parameter, set to 100 ', () => {
     enhancer.repair(item);
        expect(item.durability).toBe(100);
    })
})



describe('enhancement is successful', () => {
    it('should check and modify, or not modify enhancement level', () => {
        enhancer.success(item);
        expect(item.enhancement).toBe(16)
    })
})


// describe('enhancement fails', () => {
//     it('should check the level of enhancement and execute the correct function', () => {
//         enhancer.fail(item);
//         expect(item.durability).toBe(35)
//     })
 
// })