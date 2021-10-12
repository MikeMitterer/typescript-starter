import { Description, TestFunction } from './utils'
import * as chai from 'chai'

export function testQUnit(describe: Description, test: TestFunction): void {
    // describe('QUnit', (): void => {
    //     test('test qunit', (assert): void => {
    //         assert.ok(true, 'Test ob QUnit funktioniert')
    //     })
    // })
    chai.assert(false, 'Test ob Chai funktioniert')
}
