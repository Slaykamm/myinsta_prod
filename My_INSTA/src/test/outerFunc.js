import { omitCarNameArray } from "./innerFunc/innerFunc";


const carInfo = [
    {
        id: '1',
        carName: 'Volga',
        year: '2015'
    },
    {
        id: '2',
        carName: 'Vaz',
        year: '2016'
    },
    {
        id: '3',
        carName: 'Moskvich',
        year: '2017'
    }
] 

console.log(omitCarNameArray(carInfo))