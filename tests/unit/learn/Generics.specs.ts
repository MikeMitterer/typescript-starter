describe('Function mit Return-Type', () => {
    test('Simple', () => {
        const gt = <T>(data: T): T => data
        expect(gt<number>(10)).toBe(10)
    })

    test('Mit return type', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let gt1: <T>(data: T) => string

        const gt = <T>(data: T): string => {
            return `-${data}-`
        }
        expect(gt(10)).toBe('-10-')
    })
})
