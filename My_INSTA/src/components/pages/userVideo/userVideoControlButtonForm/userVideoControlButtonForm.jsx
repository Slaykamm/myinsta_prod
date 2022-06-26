import React from 'react'
import cl from './userVideoControlButtonForm.module.css'
import MyRedButton from '../../../../UI/MyRedButton/MyRedButton';
import MyButton from '../../../../UI/MyButton/MyButton';


function UserVideoControlButtonForm(
    {
        setDeleteMode,
        userVideoList,
        listFilesVideosToDelete,
        listFilesVideosToArchive,
        setListFilesVideosToDelete,
        setListFilesVideosToArchive,
        setUserVideoList,
        deleteFromBase,
        putToBase,
        modalActivation,
        setArchiveMode,
        ...props}) {
    

        // ------------Обработка блока кнопок вкл модуля удалить. отменить его. добавить видео и удалить в список. удалить.

        function deleteModeEnable(e){
            e.preventDefault();
            setDeleteMode(true)
        }

        function cancelDeleteMode(e){
            e.preventDefault();
            setDeleteMode(false)
            setListFilesVideosToDelete([])
            window.location.reload()
        }

        function deleteVideo () {
            var videoList = userVideoList
            for (let i = 0; i<listFilesVideosToDelete.length; i++){
                var videoList = videoList.filter(video => listFilesVideosToDelete[i].id !== video.id)
            }
            setUserVideoList(videoList)
            const url = '/video'
            listFilesVideosToDelete.forEach(id =>{
                deleteFromBase(id.id, url)
            })
            setListFilesVideosToDelete([])
            setDeleteMode(false)
        }


        function archiveVideoModeEnable(e) {
            e.preventDefault()
            setArchiveMode(true)
        }

        function cancelArchiveMode(e){
            e.preventDefault();
            setArchiveMode(false)
            setListFilesVideosToArchive([])
            window.location.reload()
        }


        function moveToAchive() {
            var videos = userVideoList

            for (let i = 0; i<listFilesVideosToArchive.length; i++){
                var videos = videos.filter(video => listFilesVideosToArchive[i].id !== video.id)
            }
            listFilesVideosToArchive.forEach(id => {

                const url = '/video'
                const message = {
                    "archived": true,
                }
               putToBase(message, url, id.id)
            })
        }

    return (

        <div className={cl.ControlBtnGroup}>
            <div className={cl.ControlBtnNameContainer}>
                <div className={cl.loadingButton}>
                    <MyButton
                        onClick={modalActivation}
                    >Загрузить новые видео</MyButton>
                </div>

                <div className={cl.DeleteModeONButton}>
                    <MyButton
                        onClick={e => deleteModeEnable(e)}
                    >Пометить на удаление</MyButton>
                </div>

                <div className={cl.DeleteModeOFFButton}>
                    <MyButton
                        onClick={cancelDeleteMode}
                    >Выключить режим удаления</MyButton>
                </div>

                {listFilesVideosToDelete.length > 0
                ?
                <div className={cl.DeleteButton}>
                    <MyRedButton
                        onClick={deleteVideo}

                    >Удалить {listFilesVideosToDelete.length} видео </MyRedButton>
                </div>
                : <div></div>
                }
                <div>
                    
                </div>
                <div className={cl.ArhiveModeBtn}>
                    <MyButton
                        onClick={e => archiveVideoModeEnable(e)}
                    >Пометить на архивирование</MyButton>
                </div>
                <div className={cl.ArhiveModeBtn}>
                    <MyButton
                        onClick={cancelArchiveMode}
                    >выключить архивирование</MyButton>
                </div>

                {listFilesVideosToArchive.length > 0 ?
                <div className={cl.MoveArchiveBtn}>
                    <MyButton
                        onClick={moveToAchive}
                    >Архивировать {listFilesVideosToArchive.length} видео </MyButton>
                </div>
                : <div></div>
                }
                
            </div>
        </div>
    )
}

export default UserVideoControlButtonForm
