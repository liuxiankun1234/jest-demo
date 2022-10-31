import Logger from '../src/index'

describe('Logger测试用例', () => {
    it('测试add函数 1 + 2 === 3', () => {
        const logger = new Logger()
        expect(logger.os).toBe('android')
    })
})