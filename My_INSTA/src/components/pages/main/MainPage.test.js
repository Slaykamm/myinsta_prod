
import { forTestFunc } from './forT'

describe('Test Inport function', () => {
    describe('inn lawyer', () => {
        const dataMock = [
            {
                id: '4',
                carName: 'UAZ',
                year: '2021'
            },
        ]
        const expectedResult = [
            {
                id: '4', 
                year: '2021'
            }
        ]
        it.each([
            [
                dataMock,
                expectedResult
            ],
        ])(
            `data %j
            result => %j`,
            (
                carInfoData
            ) => {
                expect(forTestFunc(
                    carInfoData
                )).toEqual(expectedResult)
            }
        )
    })
})