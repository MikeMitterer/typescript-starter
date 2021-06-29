import 'jest-extended'
import { check, isBetween, isNotUndefined } from '@mmit/check'

class Name {
    public readonly firstname: string | null

    constructor(firstname: string | null) {
        this.firstname = firstname
    }
}

describe('basics', () => {
    test('Test Jest', () => {
        const name = new Name('Mike')

        expect(name.firstname).toStartWith('Mi')
    })

    test('for undefined', () => {
        expect(
            check(5)
                .ifit(isBetween(5, 10))
                .else(5),
        ).toBe(5)

        let v1: number | undefined = 5
        v1 = undefined
        expect(
            check(v1)
                .ifit(isNotUndefined)
                .else(5),
        ).toBe(5)

        expect(
            check('Mike')
                .ifit(isNotUndefined)
                .else('default'),
        ).toBe('Mike')

        expect(
            check(undefined)
                .ifit(isNotUndefined)
                .else('default'),
        ).toBe('default')
    })
})
