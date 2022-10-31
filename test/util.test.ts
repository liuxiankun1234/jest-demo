import { add } from '../src/util'

describe('util工具库测试用例', () => {
    it('测试add函数 1 + 2 === 3', () => {
        expect(add(1, 2)).toBe(3)
    })
})