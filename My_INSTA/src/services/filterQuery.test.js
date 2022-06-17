
import '@testing-library/jest-dom';

const filterQuery = require('./filterQuery');


const files = [
    {
        id: 1,
        title: 'name1',
        username: 'Author1'
    },
    {
        id: 2,
        title: 'name2',
        username: 'Author2'
    },
    {
        id: 3,
        title: 'name3',
        username: 'Author3'
    }

    
]

test('Проверка фильрации массива по 0 строке', () => {
    expect(filterQuery(files, null)).toEqual(files)
})

test('Проверка фильрации массива по 2 симв строке', () => {
    expect(filterQuery(files, 'na')).toEqual(files)
})

test('Проверка фильрации массива по 3 симв строке name', () => {
    expect(filterQuery(files, 'nam')).toEqual(files)
})

test('Проверка фильрации массива по  name', () => {
    expect(filterQuery(files, 'name2')).toEqual(    
        [
            {
                id: 2,
                title: 'name2',
                username: 'Author2'
            }
        ]
    )
})

test('Проверка фильрации массива по  username', () => {
    expect(filterQuery(files, 'Author3')).toEqual(
        [
            {
                id: 3,
                title: 'name3',
                username: 'Author3'
            }
        ]
    )
})

test('Проверка фильрации массива по  lowerBigcase', () => {
    expect(filterQuery(files, 'AuThoR3')).toEqual(
        [
            {
                id: 3,
                title: 'name3',
                username: 'Author3'
            }
        ]
    )
})