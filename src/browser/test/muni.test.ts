import { test } from '@mmit/muni'
import { expect } from 'chai'

export async function testMUnit(): Promise<void> {
    await test('test MUNI-UnitTest', async (): Promise<void> => {
        // tslint:disable-next-line:no-unused-expression
        expect(true, 'Value should be true').to.be.true
    })
}
