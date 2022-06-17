
import '@testing-library/jest-dom';


const getIndexesFromPrivateRoomNameService = require('./roomNamesService.js');



test('Проверка получение индексов  имени группы', () => {
    expect(getIndexesFromPrivateRoomNameService('@PRIVATE_1_2')).toEqual(['@PRIVATE', '1', '2'])
})

test('Проверка получение индексов  имени группы', () => {
    expect(getIndexesFromPrivateRoomNameService('@PRIVATE_')).toBe('ошибка получения индексов из имени группы')
})
