import { 
    getUsersDict, 
    getActualUserInfo, 
    getPrivateRooms, 
    getAnotherChatMatesID, 
    getAnotherChatMatesMultyUsersID, 
    getPrivateMessageByRoomID 
} from "./privateRoomsSelector";


describe('getUsersDict', () => {
    test('getUsersDict empty state', () => {
        expect(getUsersDict({})).toEqual([])
    })


    test('getUsersDict filled', () => {
        const mockObj = [
            {
                'author': 1,
                'avatar': "http://127.0.0.1:8000/media/avatar/mouse_LD1W19l.jpg",
                'date_joined': "2022-04-01T04:50:40.407707Z",
                'email': "mouse@mail.ru",
                'first_name': "",
                'id': 1,
                'is_active': true,
                'last_login': "2022-05-16T20:55:29.436280Z",
                'last_name': "",
                'phone': "+333333333",
                'userID': 3,
                'username': "Mouse",
            },
            {
                'author': 2,
                'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
                'date_joined': "2022-04-01T04:50:52.512108Z",
                'email': "dog@mail.ru",
                'first_name': "",
                'id': 2,
                'is_active': true,
                'last_login': "2022-05-18T12:59:06.805123Z",
                'last_name': "",
                'phone': "+2222222222",
                'userID': 2,
                'username': "Dog",
            }
        ]
        expect(getUsersDict({usersDict: mockObj})).toEqual(mockObj)
    })



    test('getActualUserInfo from dict', () => {
        const mockObj = [
            {
                'author': 1,
                'avatar': "http://127.0.0.1:8000/media/avatar/mouse_LD1W19l.jpg",
                'date_joined': "2022-04-01T04:50:40.407707Z",
                'email': "mouse@mail.ru",
                'first_name': "",
                'id': 1,
                'is_active': true,
                'last_login': "2022-05-16T20:55:29.436280Z",
                'last_name': "",
                'phone': "+333333333",
                'userID': 3,
                'username': "Mouse",
            },
            {
                'author': 2,
                'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
                'date_joined': "2022-04-01T04:50:52.512108Z",
                'email': "dog@mail.ru",
                'first_name': "",
                'id': 2,
                'is_active': true,
                'last_login': "2022-05-18T12:59:06.805123Z",
                'last_name': "",
                'phone': "+2222222222",
                'userID': 2,
                'username': "Dog",
            },
            {
                'author': 3,
                'avatar': "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                'date_joined': "2022-04-01T04:50:57.009596Z",
                'email': "cat@mail.ru",
                'first_name': "",
                'id': 3,
                'is_active': true,
                'last_login': "2022-06-13T19:25:46.168988Z",
                'last_name': "",
                'phone': "+11111111111",
                'userID': 1,
                'username': "Cat",
            }
        ]
        
        const state = {
            usersDict: mockObj
        }
        const expectedOutput = [{            
            'author': 2,
            'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
            'date_joined': "2022-04-01T04:50:52.512108Z",
            'email': "dog@mail.ru",
            'first_name': "",
            'id': 2,
            'is_active': true,
            'last_login': "2022-05-18T12:59:06.805123Z",
            'last_name': "",
            'phone': "+2222222222",
            'userID': 2,
            'username': "Dog",
            }]
            localStorage.setItem('SLNUserName', 'Dog')
            expect(getActualUserInfo(state)).toEqual(expectedOutput)

            expect(getActualUserInfo({})).toEqual([])

    })

    test('getPrivateRooms empty state', () => {
        expect(getPrivateRooms([{}])).toEqual([])
    })



    test('getPrivateRooms filled state', () => {
        const mockObj = [
            {
                'id': 1,
                'lastOpenDate': "2022-06-15T14:24:09.881000Z",
                'privateChat': true,
                'privateChatName': "@PRIVATE_1_3",
                'privateRoomMembers': [1, 3]
            },
            {
                'id': 44,
                'lastOpenDate': "2022-05-27T12:21:19.479000Z",
                'privateChat': true,
                'privateChatName': "@PRIVATE_3_99",
                'privateRoomMembers': [3, 99]
            }
        ]

        expect(getPrivateRooms({getPrivateRooms: mockObj})).toEqual(mockObj)
    })

    test('getAnotherChatMatesMultyUsersID filled state', () => {

        localStorage.setItem('SLNUserName', 'Cat')
        const mockUsers = [
            {
                "id": 1,
                "privateChatName": "@PRIVATE_1_3",
                "lastOpenDate": "2022-06-15T14:24:09.881000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    1,
                    3
                ]
            },
            {
                "id": 2,
                "privateChatName": "@MULTY_1_2_3_67_99_100",
                "lastOpenDate": "2022-04-27T14:43:04Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    99,
                    100
                ]
            },
            {
                "id": 39,
                "privateChatName": "@MULTY_1_2_3_67_68_80_97",
                "lastOpenDate": "2022-04-30T21:13:53Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    68,
                    80,
                    97
                ]
            },
            {
                "id": 40,
                "privateChatName": "@PRIVATE_2_3",
                "lastOpenDate": "2022-06-15T19:46:02.673000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    2,
                    3
                ]
            }
        ]

        const mockUsersDict = [
            {
                'author': 1,
                'avatar': "http://127.0.0.1:8000/media/avatar/mouse_LD1W19l.jpg",
                'date_joined': "2022-04-01T04:50:40.407707Z",
                'email': "mouse@mail.ru",
                'first_name': "",
                'id': 1,
                'is_active': true,
                'last_login': "2022-05-16T20:55:29.436280Z",
                'last_name': "",
                'phone': "+333333333",
                'userID': 3,
                'username': "Mouse",
            },
            {
                'author': 2,
                'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
                'date_joined': "2022-04-01T04:50:52.512108Z",
                'email': "dog@mail.ru",
                'first_name': "",
                'id': 2,
                'is_active': true,
                'last_login': "2022-05-18T12:59:06.805123Z",
                'last_name': "",
                'phone': "+2222222222",
                'userID': 2,
                'username': "Dog",
            },
            {
                'author': 3,
                'avatar': "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                'date_joined': "2022-04-01T04:50:57.009596Z",
                'email': "cat@mail.ru",
                'first_name': "",
                'id': 3,
                'is_active': true,
                'last_login': "2022-06-13T19:25:46.168988Z",
                'last_name': "",
                'phone': "+11111111111",
                'userID': 1,
                'username': "Cat",
            }
        ]

        const mockActualUser = [
            {
                "author": 3,
                "avatar": "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                "date_joined": "2022-04-01T04:50:57.009596Z",
                "email": "cat@mail.ru",
                "first_name": "",
                "id": 3,
                "is_active": true,
                "last_login": "2022-06-15T14:10:00.532127Z",
                "last_name": "",
                "phone": "+11111111111",
                "userID": 1,
                "username": "Cat",
            }
        ]

        const mockReturn = [
            {
                "privateChatID": 1,
                "anotherChatMate": [
                    1
                ],
                "privateChat": true,
                "username": "Mouse"
            },
            {
                "privateChatID": 2,
                "anotherChatMate": [
                    1,
                    2,
                    67,
                    99,
                    100
                ],
                "privateChat": false,
                "username": "Mouse"
            },
            {
                "privateChatID": 39,
                "anotherChatMate": [
                    1,
                    2,
                    67,
                    68,
                    80,
                    97
                ],
                "privateChat": false,
                "username": "Mouse"
            },
            {
                "privateChatID": 40,
                "anotherChatMate": [
                    2
                ],
                "privateChat": true,
                "username": "Dog"
            }
        ]

        const state = {
            getPrivateRooms: mockUsers, 
            usersDict: mockUsersDict,
            getUsersDict: mockUsersDict,
        }

        expect(getAnotherChatMatesMultyUsersID(state)).toEqual(mockReturn)
    })
    
    test('getAnotherChatMatesMultyUsersID withOutDict', () => {

        localStorage.setItem('SLNUserName', 'Cat')
        const mockUsers = [
            {
                "id": 1,
                "privateChatName": "@PRIVATE_1_3",
                "lastOpenDate": "2022-06-15T14:24:09.881000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    1,
                    3
                ]
            },
            {
                "id": 2,
                "privateChatName": "@MULTY_1_2_3_67_99_100",
                "lastOpenDate": "2022-04-27T14:43:04Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    99,
                    100
                ]
            },
            {
                "id": 39,
                "privateChatName": "@MULTY_1_2_3_67_68_80_97",
                "lastOpenDate": "2022-04-30T21:13:53Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    68,
                    80,
                    97
                ]
            },
            {
                "id": 40,
                "privateChatName": "@PRIVATE_2_3",
                "lastOpenDate": "2022-06-15T19:46:02.673000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    2,
                    3
                ]
            }
        ]

        const mockUsersDict = []

        

        const mockReturn = [
            {
              privateChatID: 1,
              anotherChatMate: [ 1, 3 ],
              privateChat: true,
              username: undefined
            },
            {
              privateChatID: 2,
              anotherChatMate: [ 1, 2, 3, 67, 99, 100 ],
              privateChat: false,
              username: undefined
            },
            {
              privateChatID: 39,
              anotherChatMate: [
                 1,  2,  3, 67,
                68, 80, 97
              ],
              privateChat: false,
              username: undefined
            },
            {
              privateChatID: 40,
              anotherChatMate: [ 2, 3 ],
              privateChat: true,
              username: undefined
            }
          ]

        const state = {
            getPrivateRooms: mockUsers, 
            usersDict: null,
            getUsersDict: null,
        }

        expect(getAnotherChatMatesMultyUsersID(state)).toEqual(mockReturn)
    })
    

    test('getAnotherChatMatesMultyUsersID without getPrivateRooms', () => {

        localStorage.setItem('SLNUserName', 'Cat')
        const mockUsers = [
            {
                "id": 1,
                "privateChatName": "@PRIVATE_1_3",
                "lastOpenDate": "2022-06-15T14:24:09.881000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    1,
                    3
                ]
            },
            {
                "id": 2,
                "privateChatName": "@MULTY_1_2_3_67_99_100",
                "lastOpenDate": "2022-04-27T14:43:04Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    99,
                    100
                ]
            },
            {
                "id": 39,
                "privateChatName": "@MULTY_1_2_3_67_68_80_97",
                "lastOpenDate": "2022-04-30T21:13:53Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    68,
                    80,
                    97
                ]
            },
            {
                "id": 40,
                "privateChatName": "@PRIVATE_2_3",
                "lastOpenDate": "2022-06-15T19:46:02.673000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    2,
                    3
                ]
            }
        ]

        const mockUsersDict = [
            {
                'author': 1,
                'avatar': "http://127.0.0.1:8000/media/avatar/mouse_LD1W19l.jpg",
                'date_joined': "2022-04-01T04:50:40.407707Z",
                'email': "mouse@mail.ru",
                'first_name': "",
                'id': 1,
                'is_active': true,
                'last_login': "2022-05-16T20:55:29.436280Z",
                'last_name': "",
                'phone': "+333333333",
                'userID': 3,
                'username': "Mouse",
            },
            {
                'author': 2,
                'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
                'date_joined': "2022-04-01T04:50:52.512108Z",
                'email': "dog@mail.ru",
                'first_name': "",
                'id': 2,
                'is_active': true,
                'last_login': "2022-05-18T12:59:06.805123Z",
                'last_name': "",
                'phone': "+2222222222",
                'userID': 2,
                'username': "Dog",
            },
            {
                'author': 3,
                'avatar': "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                'date_joined': "2022-04-01T04:50:57.009596Z",
                'email': "cat@mail.ru",
                'first_name': "",
                'id': 3,
                'is_active': true,
                'last_login': "2022-06-13T19:25:46.168988Z",
                'last_name': "",
                'phone': "+11111111111",
                'userID': 1,
                'username': "Cat",
            }
        ]

        const mockActualUser = [
            {
                "author": 3,
                "avatar": "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                "date_joined": "2022-04-01T04:50:57.009596Z",
                "email": "cat@mail.ru",
                "first_name": "",
                "id": 3,
                "is_active": true,
                "last_login": "2022-06-15T14:10:00.532127Z",
                "last_name": "",
                "phone": "+11111111111",
                "userID": 1,
                "username": "Cat",
            }
        ]

        const mockReturn = [
            {
                "privateChatID": 1,
                "anotherChatMate": [
                    1
                ],
                "privateChat": true,
                "username": "Mouse"
            },
            {
                "privateChatID": 2,
                "anotherChatMate": [
                    1,
                    2,
                    67,
                    99,
                    100
                ],
                "privateChat": false,
                "username": "Mouse"
            },
            {
                "privateChatID": 39,
                "anotherChatMate": [
                    1,
                    2,
                    67,
                    68,
                    80,
                    97
                ],
                "privateChat": false,
                "username": "Mouse"
            },
            {
                "privateChatID": 40,
                "anotherChatMate": [
                    2
                ],
                "privateChat": true,
                "username": "Dog"
            }
        ]

        const state = {
            getPrivateRooms: null, 
            usersDict: mockUsersDict,
            getUsersDict: mockUsersDict,
        }

        expect(getAnotherChatMatesMultyUsersID(state)).toEqual([])
    })


    test('getAnotherChatMatesMultyUsersID without actualUser. added actual user to reply', () => {

        localStorage.setItem('SLNUserName', '')
        const mockUsers = [
            {
                "id": 1,
                "privateChatName": "@PRIVATE_1_3",
                "lastOpenDate": "2022-06-15T14:24:09.881000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    1,
                    3
                ]
            },
            {
                "id": 2,
                "privateChatName": "@MULTY_1_2_3_67_99_100",
                "lastOpenDate": "2022-04-27T14:43:04Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    99,
                    100
                ]
            },
            {
                "id": 39,
                "privateChatName": "@MULTY_1_2_3_67_68_80_97",
                "lastOpenDate": "2022-04-30T21:13:53Z",
                "privateChat": false,
                "privateRoomMembers": [
                    1,
                    2,
                    3,
                    67,
                    68,
                    80,
                    97
                ]
            },
            {
                "id": 40,
                "privateChatName": "@PRIVATE_2_3",
                "lastOpenDate": "2022-06-15T19:46:02.673000Z",
                "privateChat": true,
                "privateRoomMembers": [
                    2,
                    3
                ]
            }
        ]

        const mockUsersDict = [
            {
                'author': 1,
                'avatar': "http://127.0.0.1:8000/media/avatar/mouse_LD1W19l.jpg",
                'date_joined': "2022-04-01T04:50:40.407707Z",
                'email': "mouse@mail.ru",
                'first_name': "",
                'id': 1,
                'is_active': true,
                'last_login': "2022-05-16T20:55:29.436280Z",
                'last_name': "",
                'phone': "+333333333",
                'userID': 3,
                'username': "Mouse",
            },
            {
                'author': 2,
                'avatar': "http://127.0.0.1:8000/media/avatar/dog_HJJmzTl.png",
                'date_joined': "2022-04-01T04:50:52.512108Z",
                'email': "dog@mail.ru",
                'first_name': "",
                'id': 2,
                'is_active': true,
                'last_login': "2022-05-18T12:59:06.805123Z",
                'last_name': "",
                'phone': "+2222222222",
                'userID': 2,
                'username': "Dog",
            },
            {
                'author': 3,
                'avatar': "http://127.0.0.1:8000/media/avatar/ava_Gz2OLVR.png",
                'date_joined': "2022-04-01T04:50:57.009596Z",
                'email': "cat@mail.ru",
                'first_name': "",
                'id': 3,
                'is_active': true,
                'last_login': "2022-06-13T19:25:46.168988Z",
                'last_name': "",
                'phone': "+11111111111",
                'userID': 1,
                'username': "Cat",
            }
        ]

        const mockReturn = [
            {
              privateChatID: 1,
              anotherChatMate: [ 1, 3 ],
              privateChat: true,
              username: 'Mouse'
            },
            {
              privateChatID: 2,
              anotherChatMate: [ 1, 2, 3, 67, 99, 100 ],
              privateChat: false,
              username: 'Mouse'
            },
            {
              privateChatID: 39,
              anotherChatMate: [
                 1,  2,  3, 67,
                68, 80, 97
              ],
              privateChat: false,
              username: 'Mouse'
            },
            {
              privateChatID: 40,
              anotherChatMate: [ 2, 3 ],
              privateChat: true,
              username: 'Dog'
            }
          ]

        const state = {
            getPrivateRooms: mockUsers, 
            usersDict: mockUsersDict,
            getUsersDict: mockUsersDict,
        }

        expect(getAnotherChatMatesMultyUsersID(state)).toEqual(mockReturn)
    })

    test('getPrivateMessageByRoomID with fiiled messages and room ID', () => {

        const mockPrivateMessages = [
            {
                "id": 205,
                "text": "Привет!",
                "create_at": "2022-05-27T11:54:33.193150Z",
                "author": 3,
                "privateRoom": 44
            },
            {
                "id": 209,
                "text": "112",
                "create_at": "2022-06-15T21:51:20.983473Z",
                "author": 3,
                "privateRoom": 44
            }
        ]

        const mockReturn = [
            {
              id: 205,
              text: 'Привет!',
              create_at: '2022-05-27T11:54:33.193150Z',
              author: 3,
              privateRoom: 44
            },
            {
              id: 209,
              text: '112',
              create_at: '2022-06-15T21:51:20.983473Z',
              author: 3,
              privateRoom: 44
            }
          ]

        const state = {
            privateRoomMessages: mockPrivateMessages, 
        }

        expect(getPrivateMessageByRoomID(state, 44)).toEqual(mockReturn)
        

    })

    test('getPrivateMessageByRoomID with fiiled messages and none ID', () => {

        const mockPrivateMessages = [
            {
                "id": 205,
                "text": "Привет!",
                "create_at": "2022-05-27T11:54:33.193150Z",
                "author": 3,
                "privateRoom": 44
            },
            {
                "id": 209,
                "text": "112",
                "create_at": "2022-06-15T21:51:20.983473Z",
                "author": 3,
                "privateRoom": 44
            }
        ]

        const mockReturn = []

        const state = {
            privateRoomMessages: mockPrivateMessages, 
        }

        expect(getPrivateMessageByRoomID(state, )).toEqual(mockReturn)
        

    })

    test('getPrivateMessageByRoomID without fiiled messages and room ID', () => {

        const mockPrivateMessages = []

        const mockReturn = []

        const state = {
            privateRoomMessages: mockPrivateMessages, 
        }

        expect(getPrivateMessageByRoomID(state, 44)).toEqual(mockReturn)
        

    })


})