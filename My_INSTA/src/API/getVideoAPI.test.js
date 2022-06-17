const getVideoAPI = require('./getVideoAPI')
import {jest} from '@jest/globals'
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('axios')


describe('getVideoAPI test', () => {
    let response;
    beforeEach(() => {
        response = {

            data: [
                {
                "author": 1,
                "create_at": "2022-04-01T04:53:18.827078Z",
                "description": "sdfasdfasdfasdfdasfasdfsdafasdf",
                "id": 1,
                "image": "http://127.0.0.1:8000/media/preview/besprinc_lj6FeDI.png",
                "rating": 1,
                "title": "Беспринципные от мышки №3",
                "video": "http://127.0.0.1:8000/media/video/2022-02-19-19-11-03_0rbSz4D.mp4",
                }
            ]
        }

        
    })

    test('Корректный возврат ', async () => {
       // axios.get.mockReturnValue(response)
        const id = 1
        const data = await getVideoAPI(id)

       // expect(axios.get).toBeCalledTimes(1);
        console.log(data)
        expect(data).toEqual([{
            "author": 1,
            "create_at": "2022-04-01T04:53:18.827078Z",
            "description": "sdfasdfasdfasdfdasfasdfsdafasdf",
            "id": 1,
            "image": "http://127.0.0.1:8000/media/preview/besprinc_lj6FeDI.png",
            "rating": 1,
            "title": "Беспринципные от мышки №3",
            "video": "http://127.0.0.1:8000/media/video/2022-02-19-19-11-03_0rbSz4D.mp4",
            }])
    })




})

