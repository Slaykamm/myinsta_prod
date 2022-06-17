import { isNumber } from 'lodash'


export function getPrivateRoomNameFromIndexesService(id1, id2) {
    if (!isNaN(id1) && !isNaN(id2)){
        const indexes = [id1, id2]
        indexes.sort((a,b)=> a-b)
        return `@PRIVATE_${indexes[0]}_${indexes[1]}`
    }
    else {
        return 'Невозможно создать группу. Ошибка с ID пользователей'
    }

}
//module.exports = getPrivateRoomNameFromIndexesService;


//usage const [type, index1, index2] =  getIndexesFromPrivateRoomNameService(value)
export function getIndexesFromPrivateRoomNameService(roomName){
    const arr = roomName.split('_')
    const [typeIndex, index1, index2]  = arr

    const indexesStringCheck = [typeIndex, index1, index2].filter(i => typeof i !== 'string')
    if (!indexesStringCheck.length) {
        return [typeIndex, index1, index2]
    }
    else {
        return 'ошибка получения индексов из имени группы'
    }
}

//module.exports = getIndexesFromPrivateRoomNameService;

export function getMultyUsersRoomNameFromIndexesService(indexArray) {
    const indexes = indexArray.sort((a,b)=> a-b)
    const result = '@MULTY_'+indexes.join('_')
    return [result, indexes]
}

export function getIndexesFromMultyUsersRoomNameService(roomName){
    const arr = roomName.split('_')
    const [typeIndex, ...rest]  = arr
    if (typeIndex !== '@MULTY'){
        window.alert('Не верный тип группы. Обратитесь к администратору сайта')
    }else{
        return rest
    }
}

