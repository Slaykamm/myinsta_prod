import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import cl from './MovieDispatch.module.css'
import { connect } from 'react-redux'
import { getVideoAPI } from '../../../../../API/getVideoAPI';
import { NavLink } from 'react-router-dom';
import { convertedFullDate } from '../../../../../services/dataConverter';
import { getUserDictAPI } from '../../../../../API/getUserDictAPI';
import { filter, get } from 'lodash'
import MyPrivateWhispModule from '../../../../../modules/MyPrivateWhispModule/MyPrivateWhispModule';
import { getPrivateRooms } from '../../../../../redux/Selectors/privateRoomsSelector'
import { getPrivateRoomsAPI } from '../../../../../API/getPrivateRoomsAPI'
import { getUsersDict } from '../../../../../redux/Selectors/baseSelectors'
import MyModal from '../../../../../UI/MyModal/MyModal';
import UserCabinet from '../../../../../modules/UserCabinet/UserCabinet';


interface IMovieDispatch {
    url: string, 
    title: string, 
    description: string,
    id: number, 
    author: string, 
    deleteMode: void, 
    archiveMode: void,
    addToSetListFilesVideosToDelete: void,
    deleteFromSetListFilesVideosToDelete: void,
    props: object
}

const _movieDispatch = ({
    url, 
    title, 
    description,
    id, 
    author, 
    deleteMode, 
    archiveMode,
    addToSetListFilesVideosToDelete,
    deleteFromSetListFilesVideosToDelete,
    ...props
}) => {

    //console.log('_movieDispatch 9 RENDERS')

    const usersDict = JSON.parse(window.localStorage.getItem('usersDict'))
    
    // if (!usersDict.length) {
    //     props.getUsersDict()  
    // }
    // useEffect(() => {
    //     window.localStorage.setItem('usersDict', JSON.stringify(props.usersDict))
    // }, [props.usersDict])



    function addFilesToDeleteHandle(e: Event){
        if (e) {
            addToSetListFilesVideosToDelete(id)
        } else {
            deleteFromSetListFilesVideosToDelete(id)
        }
    }


    // Private message s
    const [userForNewChat, setUserForNewChat] = useState()

    function callModalForPrivate(user){


        props.getPrivateRooms(user)
        console.log('11111111111111111111')
        setUserForNewChat(user)

    } 


    // const [foreignUser, setForeignUser] = useState('')
    // const [foreignUserModal, setForeignUserModal] = useState(false)


    // const foreignUserModalActivate = (user: number) => {
    //     const userName: string = get(filter(usersDict, {id: user}), [0, 'username'])
    //     if (localStorage.getItem('SLNUserName') !== userName) {
    //         setForeignUser(userName)
    //         setForeignUserModal(true)
    //     }
    // }




    console.log('archive', archiveMode)
    return (
        <>
                {/* <MyModal
                    visible={foreignUserModal}
                    setVisible={setForeignUserModal}
                >
                    <UserCabinet
                        isForeignUserCabinet={true}
                        foreignUser={foreignUser}
                        commentPrivateMessege={callModalForPrivate}
                        setForeignUserModal={setForeignUserModal}

                    />
                </MyModal> */}





            {userForNewChat
            ?   <div>
                {console.log('teeeest usersPrivateRooms', props.usersPrivateRooms)}
                <MyPrivateWhispModule 
                userForNewChat={userForNewChat}
                //usersDict={usersDict}
                usersPrivateRooms={props.usersPrivateRooms}
                />  
                </div>
            :   <span></span>
            }





            <div className={cl.ContainerConstruction + ' ' + (deleteMode ? cl.checkBoxDeleteMode : ' ' + (archiveMode ? cl.checkBoxDeleteMode : ' '))}>

                <div className={cl.checkBoxStyle}>
                    <input 
                    placeholder='MarkFilesToDelete'
                    type='checkbox'
                    onChange={(e) => addFilesToDeleteHandle(e.target.checked)}
                    />
                </div>






                <div className={cl.InnerBlock}>
                    <NavLink to={`/video/${id}`}>
                        <img src={url} alt='LinkToFullVideo'/>
                    </NavLink>
                </div>

                <div className={cl.InnerText}>
                    <h5><span>Название: </span>{title}</h5>
                </div>
                <div className={cl.InnerText}>
                    <h5><span>Описание: </span> {description}</h5>
                </div>
    
                <div className={cl.InnerText}>
                    <h5
                        onClick={() => callModalForPrivate(author)}
                        className={cl.AuthorHover}
                    ><span
                    >Автор: </span>{get(filter(usersDict, {'id': author}),[0, 'username'])}</h5> 
                </div>
                <div className={cl.InnerText}>   
                    <div >
                        <h5 ><span>Загружено: </span> {convertedFullDate(props.create_at)}</h5>
                    </div>       
                </div>

            </div>
        </>
    );
};

const movieDispatch = React.memo(_movieDispatch)
export default connect(
    state => ({
       videoObject: state.getVideo,
       usersDict: getUsersDict(state),
       usersPrivateRooms: getPrivateRooms(state),
    }),
    dispatch => ({
        getVideoFile: () => {
            dispatch(getVideoAPI(id))
        },
        getPrivateRooms: (value) => {
            dispatch(getPrivateRoomsAPI(value))
        },
        getUsersDict: () => {
            dispatch(getUserDictAPI())
        },
        
    })
) (movieDispatch);

