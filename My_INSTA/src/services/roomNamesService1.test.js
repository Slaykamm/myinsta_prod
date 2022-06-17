
import '@testing-library/jest-dom';

const getPrivateRoomNameFromIndexesService = require('./roomNamesService.js');


test('Проверка получение Имени  из индексов ', () => {
    expect(getPrivateRoomNameFromIndexesService(1, 2)).toBe('@PRIVATE_1_2')
})

test('Проверка получение Имени  из индексов  два одинаковых', () => {
    expect(getPrivateRoomNameFromIndexesService(1, 1)).toBe('@PRIVATE_1_1')
})

test('Проверка получение Имени  из индексов только один есть', () => {
    expect(getPrivateRoomNameFromIndexesService(1)).toBe('Невозможно создать группу. Ошибка с ID пользователей')
})

test('Проверка получение Имени  из индексов стринг вместо намбер', () => {
    expect(getPrivateRoomNameFromIndexesService('1', '2')).toBe('@PRIVATE_1_2')
})

